'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey I am Byte AI, I am Byte support bot. How can I assist you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! I'll get back to you soon.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="floating-chat" onClick={() => setIsOpen(true)}>
        <Image 
          src="/favicon.ico" 
          alt="Byte AI Chat" 
          width={40} 
          height={40}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Chat Modal */}
      <div className={`chat-modal ${isOpen ? 'active' : ''}`}>
        <div className="chat-container">
          {/* Chat Header */}
          <div className="chat-header">
            <h3>Byte AI Support</h3>
            <button 
              className="chat-close" 
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`chat-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="chat-send" 
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
