import React, { useEffect, useRef } from 'react';
import './Chatpage.css';

const Chatpage = ({ chats, loading }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <div className="chat-container">
      <ul className="chat-list">
        {chats.map((e, index) => (
          <li key={index} className={`chat-message ${e.role}`}>
            {e.content}
          </li>
        ))}
        {loading && <h3>loading...</h3>}
        <div ref={chatEndRef} />
      </ul>
    </div>
  );
};

export default Chatpage;
