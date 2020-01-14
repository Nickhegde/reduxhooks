import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SlideBar, ChatBox } from './components';
import { showDashboard } from 'actions';

import './Dashboard.scss';

function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData);
  useEffect(() => {
    window.onpopstate = (e) => showDashboard(dispatch);
  })
  if (!users.showDashboard) {
    showDashboard(dispatch);
  }
  return (
    <div className='dashboard-container'>
      <SlideBar></SlideBar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default Dashboard;