import React, { Component } from 'react';
import HomePage from './components/HomePage';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import MePage from './components/MePage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const store = configureStore();

class App extends Component {
  render() {
    return (
    <Provider store={store}>   
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/me" component={MePage}/>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;

