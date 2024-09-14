import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './Chatpage.css'; // Ensure you have the correct path for your CSS

const ChatInput = ({ fetchChats, setLoading }) => {
  const [prompt, setPrompt] = useState('');
  const userId = "user123";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://chat-server-og4g.onrender.com/chat', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          userId, 
          prompt, 
          timestamp: new Date().toISOString()
        }),
      });
      const data = await response.json();
      console.log(data);
      fetchChats();
    } catch (error) {
      console.log('Error fetching chats', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (prompt.trim()) {
      fetchData();
      setPrompt('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder="Type a message..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="send-button" onClick={handleClick}>
        <FiSend />
      </button>
    </div>
  );
};

export default ChatInput;
