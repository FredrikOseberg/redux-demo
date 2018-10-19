import React, { Component } from 'react';
import Products from './Products';

import { Provider } from 'react-redux';

import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
