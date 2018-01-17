import React, { Component } from 'react';
import HomePage from './components/HomePage';
import MePage from './components/MePage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/me" component={MePage}/>
      </div>
    </Router>
    );
  }
}

export default App;

