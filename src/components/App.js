import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../style/App.css';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <Router>
               <main>
                 <Switch>
                   <Route
                      exact path="/"
                      component={Landing}
                   />
                   <Route
                      exact path=""
                      //component={}
                   />
                   <Route
                      exact path=""
                      //component={}
                   />
                   <Route
                      exact path=""
                      //component={}
                  />
                 </Switch>
               </main>
       </Router>
    );
  }
}

export default App;
