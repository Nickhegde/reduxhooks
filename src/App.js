import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dashboard } from 'containers';
import { ROUTES } from 'consts';

import { Logo } from 'assets/images';
import './App.scss';

function App() {
  const [active, setActive] = useState(true);

  const toggle = () => {
    setActive(false);
  }

  return (
    <Router>
      <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
      <div className="App">
        {active && (window.location.pathname === '/') ?
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
