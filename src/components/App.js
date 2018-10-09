import React, { Component } from 'react';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import About from '../containers/About/index';
import Programs from '../containers/Programs';
import Team from '../containers/Team/index';
import Contacts from '../containers/Contacts/index';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Programs />
        <Team />
        <Contacts />
      </div>
    );
  }
}

export default App;
