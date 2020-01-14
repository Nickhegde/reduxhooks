import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SendArrow } from 'assets/images';

import './InputBox.scss';

export default function InputBox() {
  const [text, setText] = useState(null);
  const chatData = useSelector(state => state.chatData);

  const onTextChange = (e) => {
    setText(e.value);
  }

  return (
    <div className='input-box-container'>
      <input
        type='text'
        className='text-input'
        value={text}
        onChange={onTextChange}
      ></input>
      <button className='send-btn'><SendArrow className='send-arrow'></SendArrow></button>
    </div>
  );
}
