import React, { Component } from 'react';
import './App.css';
import Result from './containers/Result';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import background from './assets/bg.jpg';
import reducers from './reducers';

const styles = {
  app:{
    background:`url(${background})`,
    backgroundSize: 'contain',
    height: '100vh',
    color: 'white',
    padding: '50px',
  }
}

const store = createStore(reducers);

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
