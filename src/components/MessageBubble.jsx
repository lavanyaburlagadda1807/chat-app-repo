import React from 'react';

function MessageBubble({ message }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="bg-blue-500 text-white p-2 rounded-lg">
        <p>{message.text}</p>
        <span className="text-xs">{message.timestamp}</span>
      </div>
    </div>
  );
}

export default MessageBubble;
