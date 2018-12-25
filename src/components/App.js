import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import About from '../containers/About/index';
import Programs from '../containers/Programs';
import Contacts from '../containers/Contacts/index';
import Team from '../containers/Team/index';
import ProgramDetail from '../containers/ProgramDetails/index';
import Schedule from '../containers/Schedule/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    switch(this.props.selected_section){
      case 'Team':
        return (
          <div>
            <NavBar />
            <Team />
          </div>
        )
      case 'Programs':
        return (
          <div>
            <NavBar />
            <ProgramDetail />
          </div>
        )
      case 'Schedule & Rate':
        return (
          <div>
            <NavBar />
            <Schedule />
          </div>
        )
      default: 
        return (
        <div>
          <NavBar />
          <About />
          <Programs />
          <Contacts ref={this.myRef} />
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
