import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './routes/home.js'
import Page1 from './routes/page1.js'
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

export default App;
