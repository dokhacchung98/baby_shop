import React, { Component } from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import MyRouter from './components/router';
import { history } from './components/router/History';
// import './firebase-message-sw.js';


class App extends Component {
  render() {
    return (
      <Routers history={history}>
        <MyRouter></MyRouter>
      </Routers>
    );
  }
}

export default App;