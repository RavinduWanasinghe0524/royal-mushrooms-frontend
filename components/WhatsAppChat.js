import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const WhatsAppChat = ({ isOpen, onClose, user }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [typingUsers, setTypingUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  
  const emojis = ['😀', '😂', '❤️', '👍', '👎', '😍', '😢', '😮', '😡', '🤔', '👏', '🙏', '🔥', '💯', '🎉'];
  
  // Initialize socket connection
  useEffect(() => {
    if (isOpen && user) {
      const newSocket = io('http://localhost:5000', {
        cors: {
          origin: "http://localhost:3000",
          credentials: true
        }
      });
      
      setSocket(newSocket);
      
      // Connection events
      newSocket.on('connect', () => {
        setIsConnected(true);
        newSocket.emit('user_join', {
          id: user.id || user.name,
          name: user.name
        });
      });
      
      newSocket.on('disconnect', () => {
        setIsConnected(false);
      });
      
      // Message events
      newSocket.on('new_message', (message) => {
        setMessages(prev => [...prev, message]);
      });
      
      newSocket.on('message_deleted', (data) => {
        setMessages(prev => prev.filter(msg => msg.id !== data.messageId));
      });
      
      newSocket.on('message_edited', (editedMessage) => {
        setMessages(prev => prev.map(msg => 
          msg.id === editedMessage.id ? editedMessage : msg
        ));
      });
      
      newSocket.on('message_reaction', (data) => {
        setMessages(prev => prev.map(msg => 
          msg.id === data.messageId ? { ...msg, reactions: data.reactions } : msg
        ));
      });
      
      // Typing events
      newSocket.on('user_typing', (data) => {
        if (data.isTyping) {
          setTypingUsers(prev => [...prev.filter(u => u.userId !== data.userId), data]);
        } else {
          setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
        }
      });
      
      // Online users events
      newSocket.on('online_users', (users) => {
        setOnlineUsers(users);
      });
      
      newSocket.on('user_online', (user) => {
        setOnlineUsers(prev => [...prev.filter(u => u.id !== user.id), user]);
      });
      
      newSocket.on('user_offline', (user) => {
        setOnlineUsers(prev => prev.filter(u => u.id !== user.id));
      });
      
      return () => {
        newSocket.close();
      };
    }
  }, [isOpen, user]);
  
  // Load rooms when socket connects
  useEffect(() => {
    if (socket && isConnected && user) {
      loadRooms();
      socket.emit('get_online_users');
    }
  }, [socket, isConnected, user]);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const loadRooms = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/rooms/${user.id || user.name}`);
      const userRooms = await response.json();
      setRooms(userRooms);
      
      // If no rooms exist, create a default support room
      if (userRooms.length === 0) {
        const defaultRoom = await createRoom('Support Chat', [user.id || user.name, 'support']);
        setRooms([defaultRoom]);
        setActiveRoom(defaultRoom);
        loadMessages(defaultRoom.id);
      } else {
        setActiveRoom(userRooms[0]);
        loadMessages(userRooms[0].id);
      }
    } catch (error) {
      console.error('Error loading rooms:', error);
    }
  };
  
  const createRoom = async (name, participants) => {
    try {
      const response = await fetch('http://localhost:5000/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, participants })
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating room:', error);
      return null;
    }
  };
  
  const loadMessages = async (roomId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${roomId}`);
      const roomMessages = await response.json();
      setMessages(roomMessages);
      
      if (socket) {
        socket.emit('join_room', roomId);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };
  
  const sendMessage = () => {
    if (newMessage.trim() && socket && activeRoom) {
      const messageData = {
        roomId: activeRoom.id,
        userId: user.id || user.name,
        userName: user.name,
        content: newMessage.trim(),
        type: 'text'
      };
      
      socket.emit('send_message', messageData);
      setNewMessage('');
      stopTyping();
    }
  };
  
  const sendFileMessage = async (file) => {
    if (!file || !socket || !activeRoom) return;
    
    setIsUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        const messageData = {
          roomId: activeRoom.id,
          userId: user.id || user.name,
          userName: user.name,
          content: result.file.url,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          fileName: result.file.originalName,
          fileSize: result.file.size
        };
        
        socket.emit('send_message', messageData);
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('File upload error:', error);
      alert('Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        alert('Only images and videos are allowed');
        return;
      }
      
      sendFileMessage(file);
    }
  };
  
  const startTyping = () => {
    if (socket && activeRoom) {
      socket.emit('typing_start', {
        roomId: activeRoom.id,
        userId: user.id || user.name,
        userName: user.name
      });
      
      // Clear existing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      // Stop typing after 3 seconds of inactivity
      typingTimeoutRef.current = setTimeout(() => {
        stopTyping();
      }, 3000);
    }
  };
  
  const stopTyping = () => {
    if (socket && activeRoom) {
      socket.emit('typing_stop', {
        roomId: activeRoom.id,
        userId: user.id || user.name,
        userName: user.name
      });
    }
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  };
  
  const addReaction = (messageId, emoji) => {
    if (socket && activeRoom) {
      socket.emit('add_reaction', {
        messageId,
        emoji,
        userId: user.id || user.name,
        roomId: activeRoom.id
      });
    }
  };
  
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const switchRoom = (room) => {
    if (activeRoom && socket) {
      socket.emit('leave_room', activeRoom.id);
    }
    setActiveRoom(room);
    loadMessages(room.id);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 bg-green-600 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="font-bold">{user?.name?.charAt(0) || 'U'}</span>
              </div>
              <div>
                <h3 className="font-semibold">{user?.name || 'User'}</h3>
                <div className="flex items-center space-x-1 text-xs">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-300' : 'bg-red-300'}`}></div>
                  <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-green-700 p-2 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Rooms List */}
          <div className="flex-1 overflow-y-auto">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => switchRoom(room)}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition ${
                  activeRoom?.id === room.id ? 'bg-green-100 border-r-4 border-green-500' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {room.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 truncate">{room.name}</h4>
                    {room.lastMessage && (
                      <p className="text-sm text-gray-600 truncate">
                        {room.lastMessage.type === 'text' 
                          ? room.lastMessage.content 
                          : `📎 ${room.lastMessage.type}`
                        }
                      </p>
                    )}
                    {room.lastMessage && (
                      <p className="text-xs text-gray-400">
                        {formatTime(room.lastMessage.timestamp)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Online Users */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Online ({onlineUsers.length})</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {onlineUsers.map((onlineUser) => (
                <div key={onlineUser.id} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {onlineUser.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{onlineUser.name}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {activeRoom ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {activeRoom.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{activeRoom.name}</h3>
                    <p className="text-sm text-gray-600">
                      {activeRoom.participants.length} participants
                    </p>
                  </div>
                </div>
                
                {/* Typing Indicator */}
                {typingUsers.length > 0 && (
                  <div className="text-sm text-green-600">
                    {typingUsers.map(u => u.userName).join(', ')} 
                    {typingUsers.length === 1 ? ' is' : ' are'} typing...
                  </div>
                )}
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.userId === (user.id || user.name) ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl relative group ${
                      message.userId === (user.id || user.name)
                        ? 'bg-green-500 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                    }`}>
                      {/* Message Content */}
                      {message.type === 'text' ? (
                        <p className="text-sm">{message.content}</p>
                      ) : message.type === 'image' ? (
                        <div>
                          <img
                            src={message.content}
                            alt="Shared image"
                            className="rounded-lg max-w-full h-auto mb-2"
                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                          />
                          {message.fileName && (
                            <p className="text-xs opacity-75">{message.fileName}</p>
                          )}
                        </div>
                      ) : message.type === 'video' ? (
                        <div>
                          <video
                            src={message.content}
                            controls
                            className="rounded-lg max-w-full h-auto mb-2"
                            style={{ maxHeight: '200px' }}
                          />
                          {message.fileName && (
                            <p className="text-xs opacity-75">
                              {message.fileName} ({formatFileSize(message.fileSize)})
                            </p>
                          )}
                        </div>
                      ) : null}
                      
                      {/* Message Info */}
                      <div className="flex items-center justify-between mt-1">
                        <p className={`text-xs opacity-75 ${
                          message.userId === (user.id || user.name) ? 'text-green-100' : 'text-gray-500'
                        }`}>
                          {message.userName} • {formatTime(message.timestamp)}
                          {message.edited && ' (edited)'}
                        </p>
                      </div>
                      
                      {/* Reactions */}
                      {message.reactions && Object.keys(message.reactions).length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {Object.entries(message.reactions).map(([emoji, users]) => (
                            <span
                              key={emoji}
                              className="text-xs bg-gray-200 rounded-full px-2 py-1 flex items-center space-x-1 cursor-pointer"
                              onClick={() => addReaction(message.id, emoji)}
                            >
                              <span>{emoji}</span>
                              <span className="text-gray-600">{users.length}</span>
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Quick Reactions (show on hover) */}
                      <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1 bg-white rounded-full px-2 py-1 shadow-lg border border-gray-200">
                        {['❤️', '👍', '😂', '😮'].map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => addReaction(message.id, emoji)}
                            className="hover:scale-125 transition-transform"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="mb-2 p-2 bg-gray-50 rounded-lg flex flex-wrap gap-1">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => {
                          setNewMessage(prev => prev + emoji);
                          setShowEmojiPicker(false);
                        }}
                        className="text-lg hover:scale-125 transition-transform p-1"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  {/* File Upload */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition disabled:opacity-50"
                  >
                    {isUploading ? (
                      <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Emoji Button */}
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
                  >
                    😀
                  </button>
                  
                  {/* Message Input */}
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => {
                      setNewMessage(e.target.value);
                      startTyping();
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={!isConnected}
                  />
                  
                  {/* Send Button */}
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim() || !isConnected}
                    className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </div>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default WhatsAppChat;
