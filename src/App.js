import React from 'react';
import { Switch, Route } from "react-router-dom";

/* ROUTES */

import Home from './routes/home.js'
import Page1 from './routes/page1.js'

/* STYLES */
import './styles/main.css'
const App = () => {
  return(
    <div className="main">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/page1'>
          <Page1 />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;;
