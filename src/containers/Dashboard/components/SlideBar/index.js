import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { STRINGS } from 'consts'
import { setActiveChatIndex } from 'actions';

import { Logo } from 'assets/images';
import './SlideBar.scss'


export default function SlideBar() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const users = useSelector(state => state.userData.users);
  const setActiveChat = (index) => {
    setActive(index);
    setActiveChatIndex(dispatch, index);
  }
  return (
    <div className='slidebar-container'>
      <div className='header'>
        <Logo className='App-logo' />
        <p className='title'>{STRINGS.CHAT_BOT}</p>
      </div>
      <div className='user-list-container'>
        {
          users.map((user, index) => {
            return (
              <div onClick={() => setActiveChat(index)} className={`user ${active === index ? 'underline' : ''}`} key={index}>{user}</div>
            );
          })
        }
      </div>
    </div>
  );
}
