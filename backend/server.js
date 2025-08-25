const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Configure CORS for Socket.IO
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve static files from uploads directory
app.use('/uploads', express.static(uploadsDir));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Accept images and videos
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images and videos are allowed!'), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// In-memory storage for demo (in production, use a database)
let messages = [];
let users = new Map();
let rooms = new Map();

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Chat server is running' });
});

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    const fileInfo = {
      id: uuidv4(),
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      url: fileUrl,
      uploadedAt: new Date()
    };

    res.json({ 
      success: true, 
      file: fileInfo 
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});

// Get messages for a room
app.get('/api/messages/:roomId', (req, res) => {
  const { roomId } = req.params;
  const roomMessages = messages.filter(msg => msg.roomId === roomId);
  res.json(roomMessages);
});

// Get user's rooms
app.get('/api/rooms/:userId', (req, res) => {
  const { userId } = req.params;
  const userRooms = [];
  
  for (let [roomId, room] of rooms) {
    if (room.participants.includes(userId)) {
      userRooms.push({
        id: roomId,
        name: room.name,
        participants: room.participants,
        lastMessage: messages
          .filter(msg => msg.roomId === roomId)
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0],
        createdAt: room.createdAt
      });
    }
  }
  
  res.json(userRooms);
});

// Create or get a room
app.post('/api/rooms', (req, res) => {
  const { name, participants } = req.body;
  
  // Check if room with same participants exists
  let existingRoom = null;
  for (let [roomId, room] of rooms) {
    const sameParticipants = participants.every(p => room.participants.includes(p)) && 
                            room.participants.every(p => participants.includes(p));
    if (sameParticipants) {
      existingRoom = { id: roomId, ...room };
      break;
    }
  }
  
  if (existingRoom) {
    return res.json(existingRoom);
  }
  
  // Create new room
  const roomId = uuidv4();
  const newRoom = {
    id: roomId,
    name: name || `Room ${roomId.substring(0, 8)}`,
    participants,
    createdAt: new Date()
  };
  
  rooms.set(roomId, newRoom);
  res.json(newRoom);
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins
  socket.on('user_join', (userData) => {
    users.set(socket.id, {
      id: userData.id || socket.id,
      name: userData.name || 'Anonymous',
      socketId: socket.id,
      online: true,
      joinedAt: new Date()
    });
    
    console.log(`${userData.name || 'Anonymous'} joined`);
    socket.broadcast.emit('user_online', users.get(socket.id));
  });

  // Join a room
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`Socket ${socket.id} joined room ${roomId}`);
  });

  // Leave a room
  socket.on('leave_room', (roomId) => {
    socket.leave(roomId);
    console.log(`Socket ${socket.id} left room ${roomId}`);
  });

  // Handle message sending
  socket.on('send_message', (messageData) => {
    const message = {
      id: uuidv4(),
      ...messageData,
      timestamp: new Date(),
      delivered: true
    };
    
    // Store message
    messages.push(message);
    
    // Send to all users in the room
    io.to(messageData.roomId).emit('new_message', message);
    
    console.log('Message sent:', message);
  });

  // Handle typing indicators
  socket.on('typing_start', (data) => {
    socket.to(data.roomId).emit('user_typing', {
      userId: data.userId,
      userName: data.userName,
      isTyping: true
    });
  });

  socket.on('typing_stop', (data) => {
    socket.to(data.roomId).emit('user_typing', {
      userId: data.userId,
      userName: data.userName,
      isTyping: false
    });
  });

  // Handle message reactions
  socket.on('add_reaction', (data) => {
    const message = messages.find(m => m.id === data.messageId);
    if (message) {
      if (!message.reactions) {
        message.reactions = {};
      }
      if (!message.reactions[data.emoji]) {
        message.reactions[data.emoji] = [];
      }
      if (!message.reactions[data.emoji].includes(data.userId)) {
        message.reactions[data.emoji].push(data.userId);
        io.to(data.roomId).emit('message_reaction', {
          messageId: data.messageId,
          reactions: message.reactions
        });
      }
    }
  });

  // Handle online users request
  socket.on('get_online_users', () => {
    const onlineUsers = Array.from(users.values()).filter(user => user.online);
    socket.emit('online_users', onlineUsers);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      user.online = false;
      socket.broadcast.emit('user_offline', user);
      console.log(`${user.name} disconnected`);
    }
    users.delete(socket.id);
  });

  // Handle message deletion
  socket.on('delete_message', (data) => {
    const messageIndex = messages.findIndex(m => m.id === data.messageId);
    if (messageIndex !== -1) {
      messages.splice(messageIndex, 1);
      io.to(data.roomId).emit('message_deleted', { messageId: data.messageId });
    }
  });

  // Handle message editing
  socket.on('edit_message', (data) => {
    const message = messages.find(m => m.id === data.messageId);
    if (message) {
      message.content = data.newContent;
      message.edited = true;
      message.editedAt = new Date();
      io.to(data.roomId).emit('message_edited', message);
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

server.listen(PORT, () => {
  console.log(`🚀 Chat server running on http://localhost:${PORT}`);
  console.log(`📁 File uploads available at http://localhost:${PORT}/uploads`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('💤 Server closed');
    process.exit(0);
  });
});
