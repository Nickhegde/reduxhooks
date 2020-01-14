import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard } from 'containers';
import { ROUTES } from 'consts';
import { showDashboard } from 'actions';

import { Logo } from 'assets/images';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userData.users);

  const toggle = () => {
    showDashboard(dispatch);
  }

  return (
    <Router>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <div className="App">
        {!(users.showDashboard) ?
          <div className='intro'>
            <Logo className='App-logo' />
            <p onClick={toggle}><Link className="App-link" to='/dashboard' exact='true'>Chat Bot</Link></p>
          </div> : null
        }
      </div>
    </Router>
  );
}

export default App;
