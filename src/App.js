import React, { Component } from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Main />
      </div>
    );
  }
}

export default App;
