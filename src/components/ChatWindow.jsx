import React, { useState, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { motion } from 'framer-motion';

const mockMessages = [
  { id: 1, text: 'Hello!', sender: 'John', timestamp: '10:00 AM' },
  { id: 2, text: 'Hey there!', sender: 'Jane', timestamp: '10:01 AM' },
  // Add more mock messages as needed
];

function ChatWindow() {
  const [messages, setMessages] = useState(mockMessages);

  const addMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Chat Room</h2>
      </div>
      <div className="p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessageBubble message={message} />
          </motion.div>
        ))}
      </div>
      <MessageInput onSend={addMessage} />
    </div>
  );
}

export default ChatWindow;
