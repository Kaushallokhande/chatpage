import React, { useState, useEffect } from 'react';
import Chatpage from './components/Chatpage';
import ChatInput from './components/ChatInput';

const App = () => {
  const [chats, setChats] = useState([{ role: "model", content: "How can I help you?" }]);
  const [loading, setLoading] = useState(false);

  const fetchChats = async () => {
    try {
      let response = await fetch('http://localhost:5000/history/user123');
      let data = await response.json();
      setChats(data.messages);
    } catch (error) {
      console.log('Error fetching chats', error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);


  return (
    <div>
      <Chatpage chats={chats} loading={loading}/>
      <ChatInput fetchChats={fetchChats} setLoading={setLoading}/>
    </div>
  );
};

export default App;
