import React, { Component } from 'react';

import Home from './pages/home/Home'
import YiKaTong from './pages/yikatong/YiKaTong'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <YiKaTong />
      </div>
    );
  }
}

export default App;
