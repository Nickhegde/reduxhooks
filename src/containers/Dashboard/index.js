import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SlideBar, ChatBox } from './components';
import { showDashboard, fetchActiveChat } from 'actions';

import './Dashboard.scss';

function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData);
  const chatData = useSelector(state => state.chatData);
  const { loginIndex, chat } = chatData;

  useEffect(() => {
    window.onpopstate = (e) => {
      showDashboard(dispatch);
    };
  });

  const fetchChat = (activeIndex) => {
    fetchActiveChat(dispatch, loginIndex, activeIndex, chat);
  };

  if (!users.showDashboard) {
    showDashboard(dispatch);
  }
  return (
    <div className='dashboard-container'>
      <SlideBar fetchChat={fetchChat}></SlideBar>
      <ChatBox fetchChat={fetchChat} chatData={chatData}></ChatBox>
    </div>
  );
}

export default Dashboard;