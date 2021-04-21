import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import AppsDisplay from './Pages/AppsDisplay/AppsDisplay'
import AppStatsDisplay from './Pages/AppStatsDisplay/AppStatsDisplay'

const App=() =>{

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AppsDisplay/>
          </Route>
          <Route path="/app/:id">
            <AppStatsDisplay/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
