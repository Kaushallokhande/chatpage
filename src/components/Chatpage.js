import React, { useEffect, useRef } from 'react';
import './Chatpage.css';

const Chatpage = ({ chats, loading }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    return `${formattedTime} ${formattedDate}`;
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatbot {new Date().toLocaleString()}</h2>
      </div>

      <ul className="chat-list">
        {chats.map((e, index) => (
          <li key={index} className={`chat-message ${e.role}`}>
            {e.content}
            <div className={`timestamp ${e.role}-timestamp`}>
              {formatDate(e.timestamp)}
            </div>
          </li>
        ))}
        {loading && <h3>loading...</h3>}
        <div ref={chatEndRef} />
      </ul>
    </div>
  );
};

export default Chatpage;
