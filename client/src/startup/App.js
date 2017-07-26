import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
