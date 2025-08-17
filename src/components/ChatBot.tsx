'use client';

import { useState } from 'react';
import Image from 'next/image';

interface UserInfo {
  name: string;
  email: string;
  hasDiscord: boolean;
  discordUsername?: string;
  problem: string;
}

type ConversationStep = 'welcome' | 'name' | 'email' | 'discord' | 'discordUsername' | 'problem' | 'submitting' | 'complete';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('welcome');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    hasDiscord: false,
    discordUsername: '',
    problem: ''
  });
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey I am Byte AI, I am Byte support bot. How can I assist you today?",
      sender: 'bot'
    }
  ]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue.trim();
    setInputValue('');

    // Process the conversation based on current step
    switch (currentStep) {
      case 'welcome':
        setCurrentStep('name');
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "What is your name?",
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
        break;

      case 'name':
        setUserInfo(prev => ({ ...prev, name: currentInput }));
        setCurrentStep('email');
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "What is your email?",
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
        break;

      case 'email':
        setUserInfo(prev => ({ ...prev, email: currentInput }));
        setCurrentStep('discord');
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Do you have Discord? (yes/no)",
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
        break;

      case 'discord':
        const hasDiscord = currentInput.toLowerCase().includes('yes');
        setUserInfo(prev => ({ ...prev, hasDiscord }));
        
        if (hasDiscord) {
          setCurrentStep('discordUsername');
          setTimeout(() => {
            const botResponse = {
              id: messages.length + 2,
              text: "What is your Discord username?",
              sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
          }, 500);
        } else {
          setCurrentStep('problem');
          setTimeout(() => {
            const botResponse = {
              id: messages.length + 2,
              text: "Please describe your problem or question:",
              sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
          }, 500);
        }
        break;

      case 'discordUsername':
        setUserInfo(prev => ({ ...prev, discordUsername: currentInput }));
        setCurrentStep('problem');
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Please describe your problem or question:",
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
        break;

      case 'problem':
        setUserInfo(prev => ({ ...prev, problem: currentInput }));
        setCurrentStep('submitting');
        
        // Send to Discord webhook
        await sendToDiscord();
        break;
    }
  };

  const sendToDiscord = async () => {
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_SUPPORT_WEBHOOK;
      
      const embed = {
        title: "🤖 New Support Request from Byte AI Chat",
        description: "A user has submitted a support request through the chatbot.",
        color: 0x00ff00, // Green color
        author: {
          name: "Byte AI Support Bot",
          icon_url: "https://github.com/bytrum.png"
        },
        thumbnail: {
          url: "https://github.com/bytrum.png"
        },
        fields: [
          {
            name: "👤 **USER INFORMATION**",
            value: `**Name:** ${userInfo.name}\n**Email:** ${userInfo.email}`,
            inline: false
          },
          {
            name: "📱 **DISCORD INFO**",
            value: userInfo.hasDiscord 
              ? `**Has Discord:** Yes\n**Username:** ${userInfo.discordUsername}`
              : "**Has Discord:** No",
            inline: false
          },
          {
            name: "❓ **PROBLEM DESCRIPTION**",
            value: userInfo.problem,
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Byte AI • Support Requests",
          icon_url: "https://github.com/bytrum.png"
        }
      };

      const payload = {
        embeds: [embed]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setCurrentStep('complete');
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Thank you! Your request has been submitted successfully. Our team will get back to you soon.",
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Discord:', error);
      setCurrentStep('complete');
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Sorry, there was an error submitting your request. Please try again later or contact us directly.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setCurrentStep('welcome');
    setUserInfo({
      name: '',
      email: '',
      hasDiscord: false,
      discordUsername: '',
      problem: ''
    });
    setMessages([
      {
        id: 1,
        text: "Hey I am Byte AI, I am Byte support bot. How can I assist you today?",
        sender: 'bot'
      }
    ]);
    setInputValue('');
  };

  const isInputDisabled = currentStep === 'submitting' || currentStep === 'complete';

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
            {currentStep === 'submitting' && (
              <div className="chat-message bot">
                <i className="fas fa-spinner fa-spin"></i> Submitting your request...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder={
                currentStep === 'welcome' ? "Type anything to start..." :
                currentStep === 'name' ? "Enter your name..." :
                currentStep === 'email' ? "Enter your email..." :
                currentStep === 'discord' ? "Type 'yes' or 'no'..." :
                currentStep === 'discordUsername' ? "Enter Discord username..." :
                currentStep === 'problem' ? "Describe your problem..." :
                "Input disabled"
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isInputDisabled}
            />
            <button 
              className="chat-send" 
              onClick={handleSendMessage}
              disabled={isInputDisabled}
            >
              {currentStep === 'submitting' ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                'Send'
              )}
            </button>
          </div>

          {/* Reset Button for Complete State */}
          {currentStep === 'complete' && (
            <div className="chat-reset">
              <button 
                className="chat-reset-btn" 
                onClick={resetChat}
              >
                Start New Conversation
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
