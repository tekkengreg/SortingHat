import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './containers/Result';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import background from './assets/bg.jpg'
const styles = {
  app:{
    background:`url(${background})`,
    height: '100vh',
    color: 'white',
  }
}
const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
const reducer = (state, action) => ({
  houses,
  selectedHouse: houses[Math.floor(Math.random() * 4)]
})
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={styles.app}>
          <div className="App-intro">
            <Result />
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
