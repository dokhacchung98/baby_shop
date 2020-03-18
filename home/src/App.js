import React from 'react';
import './App.css';
import { BrowserRouter as Routers } from 'react-router-dom';
import { history } from './components/router/history';
import MyRouter from './components/router';

function App() {
  return (
    <Routers history={history}>
      <MyRouter></MyRouter>
    </Routers>
  );
}

export default App;
