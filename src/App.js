import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './routes/home.js'

const App = () => {
  return(
    <div className="main">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
