import React, { Component } from 'react';
import './reset.css';
import './xui.css';

import Home from './pages/home/Home'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
