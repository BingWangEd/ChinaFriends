import React, { Component } from 'react';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import About from '../containers/About/index';
import Programs from '../containers/Programs';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Programs />
      </div>
    );
  }
}

export default App;
