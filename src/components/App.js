import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import About from '../containers/About/index';
import Programs from '../containers/Programs2';
import Contacts from '../containers/Contacts/index';
import Team from '../containers/Team/index';
import ProgramDetail from '../containers/ProgramDetails/index';

class App extends Component {
  render() {
    switch(this.props.selected_section){
      case 3:
        return (
          <div>
            <NavBar />
            <Team />
          </div>
        )
      case 2:
        return (
          <div>
            <NavBar />
            <ProgramDetail />
          </div>
        )
      default: 
        return (
        <div>
          <NavBar />
          <About />
          <Programs />
          <Contacts />
        </div>
      );
    }
    if (this.props.selected_section===3) {
      return (
        <div>
          <NavBar />
          <Team />
        </div>
      )
    } else {
      
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(App)
