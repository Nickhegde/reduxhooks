import React, { useState, useEffect } from 'react';
import { InputBox } from './components';

import './ChatBox.scss';

export default function ChatBox({ fetchChat, chatData }) {
  const { loginIndex, activeChatIndex, activeChat, chat } = chatData;
  const [chatUpdate, toggleChatUpdate] = useState(false);

  console.log("chat=", chat);
  console.log("activeChat=", activeChat);

  useEffect(() => {
    fetchChat(activeChatIndex);
  }, [chatUpdate])

  return (
    <div className='chat-box-container'>
      <div className='chat-space'>
        {activeChat.map((msg, index) => {
          return (
            < div key={index} className='chat-txt' >
              {msg}
            </div>
          )
        })}
      </div>
      <InputBox fetchChat={fetchChat} toggleChatUpdate={toggleChatUpdate} chatUpdate={chatUpdate}></InputBox>
    </div>
  );
}
