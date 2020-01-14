import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard } from 'containers';
import { ROUTES } from 'consts';

import { Logo } from 'assets/images';
import './App.scss';

function App() {
  const users = useSelector(state => state.userData);

  return (
    <Router>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <div className="App">
        {!(users.showDashboard) ?
          <div className='intro'>
            <Logo className='App-logo' />
            <Link className="App-link" to='/dashboard' exact='true'>Chat Bot</Link>
          </div> : null
        }
      </div>
    </Router>
  );
}

export default App;
