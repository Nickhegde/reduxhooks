import React, { useState, useEffect } from 'react';
import { InputBox } from './components';

import './ChatBox.scss';

export default function ChatBox({ fetchChat, chatData }) {
  const { loginIndex, activeChatIndex, activeChat } = chatData;
  const [chatUpdate, toggleChatUpdate] = useState(false);

  useEffect(() => {
    fetchChat(activeChatIndex);
  }, [chatUpdate, activeChatIndex]);

  return (
    <div className='chat-box-container'>
      <div className='chat-space'>
        {activeChat.map((msg, index) => {
          const text = msg.substr(1);
          const chatIndex = msg.slice(0, 1);
          return (
            < div key={index} className={`chat-txt ${chatIndex === loginIndex.toString() ? 'right' : 'left'}`} >
              {text}
            </div>
          )
        })}
      </div>
      <InputBox fetchChat={fetchChat} toggleChatUpdate={toggleChatUpdate} chatUpdate={chatUpdate}></InputBox>
    </div>
  );
}
