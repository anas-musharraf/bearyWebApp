import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Configure from './components/configure/Configure';
import Logs from './components/logs/Logs';
import InteractionLogs from './components/interaction_logs/InteractionLogs';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/configure' component={Configure}/>
          <Route exact path='/logs' component={Logs}/>
          <Route exact path='/interactionlogs' component={InteractionLogs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
