import React from 'react';
import { useSelector } from 'react-redux'
import { SlideBar, ChatBox } from './components';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <SlideBar></SlideBar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default Dashboard;