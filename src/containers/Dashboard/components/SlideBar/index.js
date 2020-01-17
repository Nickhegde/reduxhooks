import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { STRINGS } from 'consts'
import { showDashboard, setActiveChatIndex } from 'actions';

import { Logo } from 'assets/images';
import './SlideBar.scss'


export default function SlideBar({ fetchChat }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData.users);
  const chatData = useSelector(state => state.chatData);
  const [active, setActive] = useState(chatData.loginIndex);

  const setActiveChat = (index) => {
    setActive(index);
    setActiveChatIndex(dispatch, index);
    fetchChat(index);
  }

  return (
    <div className='slidebar-container'>
      <div className='header'>
        <Logo className='App-logo' />
        <p className='title'>{STRINGS.CHAT_BOT}</p>
      </div>
      <Link className="back" to='/' exact='true'><button className='back-btn' onClick={() => { showDashboard(dispatch) }}>{STRINGS.LOGOUT}</button></Link>
      <div className='user-list-container'>
        {
          users.map((user, index) => {
            return (
              <div onClick={() => setActiveChat(index)} className={`user ${active === index ? 'underline' : ''}`} key={index}>
                {chatData.loginIndex === index ? user.concat(STRINGS.YOU) : user}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
