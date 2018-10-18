import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import About from '../containers/About/index';
import Programs from '../containers/Programs2';
import Contacts from '../containers/Contacts/index';
import Team from '../containers/Team/index';

class App extends Component {
  render() {
    if (this.props.selected_section===4) {
      return (
        <div>
          <NavBar />
          <Team />
        </div>
      )
    } else {
      return (
        <div>
          <NavBar />
          <About />
          <Programs />
          <Contacts />
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(App)
