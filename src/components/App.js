import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../style/App.css';
import Landing from './Landing';
import DarkLight from './DarkLight';
import ChartsAndGraphs from './ChartsAndGraphs';
import MockUps from './MockUps';
import Footer from './Footer';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
               <main>
               <NavBar />
                 <Switch>
                   <Route
                      exact path="/"
                      component={Landing}
                   />
                   <Route
                      exact path="/darkLight"
                      component={DarkLight}
                   />
                   <Route
                      exact path="/ChartsAndGraphs"
                      component={ChartsAndGraphs}
                   />
                   <Route
                      exact path="/MockUps"
                      component={MockUps}
                  />
                 </Switch>
                 <Footer />
               </main>
       </Router>
    );
  }
}

export default App;
