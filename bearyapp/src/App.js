import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Configure from './components/configure/Configure';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/configure' component={Configure}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
