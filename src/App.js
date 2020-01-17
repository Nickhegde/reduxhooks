import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard } from 'containers';
import { ROUTES, STRINGS } from 'consts';
import { setLoginIndex, fetchUsers, setActiveChatIndex } from 'actions';

import { Logo } from 'assets/images';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData);
  const [userName, setUserName] = useState('');

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  }

  const onLogin = () => {
    const index = users.users.indexOf(userName);
    setLoginIndex(dispatch, index);
    fetchUsers(dispatch, index);
    setActiveChatIndex(dispatch, index);
  }


  return (
    <Router>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <div className="App">
        {!(users.showDashboard) ?
          <div className='intro'>
            <Logo className='App-logo' />
            <div className="App-link">{STRINGS.CHAT_BOT}</div>
            <select name='user-name' className='user-name' id='user-name-select' onChange={onUserNameChange} defaultValue={userName}>
              <option value="">{STRINGS.SELECT}</option>
              {users.users.map((user, index) => {
                return (
                  <option key={index} value={user} >{user}</option>
                )
              })}
            </select>
            <Link className="App-link" to={`${userName ? '/dashboard' : ''}`} exact='true'><button className={`login ${userName ? '' : 'disabled'}`} onClick={userName ? onLogin : () => { }}>{STRINGS.LOGIN}</button></Link>
          </div> : null
        }
      </div>
    </Router>
  );
}

export default App;
