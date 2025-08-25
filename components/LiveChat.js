import React, { useState, useRef, useEffect } from 'react';
import { format, isToday, isYesterday } from 'date-fns';

const LiveChat = ({ isOpen, onClose, userType, userName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(['Support Agent', 'Dr. Mushroom Expert']);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recordingIntervalRef = useRef(null);

  // Sample initial messages
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        {
          id: 1,
          text: 'Welcome to Royal Mushrooms Live Support! 🍄 How can we help you today?',
          sender: 'Support Agent',
          timestamp: new Date(Date.now() - 300000), // 5 minutes ago
          type: 'text',
          isOwn: false
        },
        {
          id: 2,
          text: 'Hi! I need help with my mushroom cultivation.',
          sender: userName || 'User',
          timestamp: new Date(Date.now() - 240000), // 4 minutes ago
          type: 'text',
          isOwn: true
        },
        {
          id: 3,
          text: 'I\'d be happy to help! Can you tell me what specific issues you\'re experiencing? Also, feel free to share photos of your setup!',
          sender: 'Support Agent',
          timestamp: new Date(Date.now() - 180000), // 3 minutes ago
          type: 'text',
          isOwn: false
        }
      ];
      setMessages(initialMessages);
    }
  }, [isOpen, userName]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    if (isToday(date)) {
      return format(date, 'HH:mm');
    } else if (isYesterday(date)) {
      return `Yesterday ${format(date, 'HH:mm')}`;
    } else {
      return format(date, 'MMM dd, HH:mm');
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: userName || 'User',
        timestamp: new Date(),
        type: 'text',
        isOwn: true
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate typing indicator and response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const responses = [
          "Thanks for your message! Let me check on that for you.",
          "That's a great question! Here's what I recommend...",
          "I understand your concern. Let me connect you with our mushroom expert.",
          "Perfect! I can definitely help you with that. Would you like to schedule a consultation?",
          "Thanks for sharing! Can you provide a bit more detail about your specific situation?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const responseMessage = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: 'Support Agent',
          timestamp: new Date(),
          type: 'text',
          isOwn: false
        };
        
        setMessages(prev => [...prev, responseMessage]);
      }, 2000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileMessage = {
        id: Date.now(),
        text: file.name,
        sender: userName || 'User',
        timestamp: new Date(),
        type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'file',
        fileUrl: URL.createObjectURL(file),
        fileSize: file.size,
        isOwn: true
      };
      
      setMessages([...messages, fileMessage]);
      
      // Reset file input
      e.target.value = '';
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingDuration(0);
    
    recordingIntervalRef.current = setInterval(() => {
      setRecordingDuration(prev => prev + 1);
    }, 1000);
    
    // Simulate recording (in real app, use Web Audio API)
    setTimeout(() => {
      stopRecording();
    }, 5000); // Auto stop after 5 seconds for demo
  };

  const stopRecording = () => {
    setIsRecording(false);
    clearInterval(recordingIntervalRef.current);
    
    const voiceMessage = {
      id: Date.now(),
      text: `Voice message (${recordingDuration}s)`,
      sender: userName || 'User',
      timestamp: new Date(),
      type: 'voice',
      duration: recordingDuration,
      isOwn: true
    };
    
    setMessages([...messages, voiceMessage]);
    setRecordingDuration(0);
  };

  const MessageBubble = ({ message }) => {
    return (
      <div className={`flex mb-4 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-sm ${
          message.isOwn 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {!message.isOwn && (
            <div className="text-xs font-medium mb-1 text-green-600">
              {message.sender}
            </div>
          )}
          
          {message.type === 'text' && (
            <div className="text-sm">{message.text}</div>
          )}
          
          {message.type === 'image' && (
            <div>
              <img 
                src={message.fileUrl} 
                alt="Shared image" 
                className="rounded-lg max-w-full h-auto mb-2"
              />
              <div className="text-xs opacity-75">{message.text}</div>
            </div>
          )}
          
          {message.type === 'video' && (
            <div>
              <video 
                controls 
                className="rounded-lg max-w-full h-auto mb-2"
              >
                <source src={message.fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-xs opacity-75">{message.text}</div>
            </div>
          )}
          
          {message.type === 'voice' && (
            <div className="flex items-center space-x-2">
              <button className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex-1">
                <div className="text-xs opacity-75">Voice message</div>
                <div className="text-xs opacity-50">{message.duration}s</div>
              </div>
            </div>
          )}
          
          {message.type === 'file' && (
            <div className="flex items-center space-x-2">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-medium">{message.text}</div>
                <div className="text-xs opacity-50">{(message.fileSize / 1024).toFixed(1)} KB</div>
              </div>
            </div>
          )}
          
          <div className={`text-xs mt-1 ${
            message.isOwn ? 'text-green-100' : 'text-gray-500'
          }`}>
            {formatMessageTime(message.timestamp)}
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl transform transition-transform">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg">💬</span>
            </div>
            <div>
              <h3 className="font-bold">Live Support</h3>
              <div className="text-xs text-green-100">
                {onlineUsers.length} agents online
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition duration-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Online Users */}
        <div className="bg-green-50 px-4 py-2 border-b">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {onlineUsers.map((user, index) => (
                <div key={index} className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white">👤</span>
                </div>
              ))}
            </div>
            <span className="text-xs text-green-700">
              {onlineUsers.join(', ')} online
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Voice Recording Overlay */}
        {isRecording && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-lg font-medium text-gray-800 mb-2">Recording...</div>
              <div className="text-2xl font-bold text-red-500 mb-4">{recordingDuration}s</div>
              <button
                onClick={stopRecording}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-200"
              >
                Stop Recording
              </button>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white border-t p-4">
          <div className="flex items-center space-x-2 mb-3">
            {/* File Upload */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-gray-500 hover:text-green-600 transition duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>

            {/* Voice Recording */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-2 transition duration-200 ${
                isRecording ? 'text-red-500' : 'text-gray-500 hover:text-green-600'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Message Input */}
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                rows={1}
                className="w-full px-4 py-2 border border-gray-300 rounded-full resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex space-x-2">
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-200">
              📚 Growing Guide
            </button>
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-200">
              🎯 Book Consultation
            </button>
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-200">
              💰 Membership Info
            </button>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,.pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default LiveChat;
