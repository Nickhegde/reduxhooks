import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SendArrow } from 'assets/images';
import { addChat } from 'actions';

import './InputBox.scss';

export default function InputBox({ fetchChat, toggleChatUpdate, chatUpdate }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const chatData = useSelector(state => state.chatData);
  const { loginIndex, activeChatIndex, chat } = chatData;
  const onTextChange = (event) => {
    setText(event.target.value);
  }

  const onSend = () => {
    addChat(dispatch, loginIndex, activeChatIndex, text);
    fetchChat(activeChatIndex);
    toggleChatUpdate(!chatUpdate);
    setText('');
  }

  return (
    <div className='input-box-container'>
      <input
        type='text'
        className='text-input'
        value={text}
        onChange={onTextChange}
        onKeyPress={event => {
          if (event.key === 'Enter' && !event.shiftKey && text !== '') {
            onSend();
          }
        }}
      ></input>
      <button
        className='send-btn'
        onClick={text === '' ? () => { } : onSend}>
        <SendArrow className='send-arrow'></SendArrow>
      </button>
    </div>
  );
}
