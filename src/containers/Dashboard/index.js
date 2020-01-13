import React from 'react';
import { useSelector } from 'react-redux'
import { SlideBar, ChatBox, InputBox } from './components';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <SlideBar></SlideBar>
      <ChatBox></ChatBox>
      <InputBox></InputBox>
    </div>
  );
}

export default Dashboard;