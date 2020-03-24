import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Configure from './components/configure/Configure';
import Logs from './components/logs/Logs';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/configure' component={Configure}/>
          <Route exact path='/logs' component={Logs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
