import React from 'react';
import { InputBox } from './components';

import './ChatBox.scss';

export default function ChatBox() {
  return (
    <div className='chat-box-container'>
      <div className='chat-space'></div>
      <InputBox></InputBox>
    </div>
  );
}
