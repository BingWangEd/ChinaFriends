import React, {Component} from 'react';
import {connect} from 'react-redux';

import About from './About/index';
import Programs from './Programs';
import Contacts from './Contacts/index';
import Team from './Team/index';
import ProgramDetail from './ProgramDetails/index';
import Schedule from './Schedule/index';
import Calendar from './Calendar/index';

class MainContent extends Component {
  render() {
    switch(this.props.selected_section){
      case 'Team':
        return (
          <div>
            <Team />
          </div>
        )
      case 'Programs':
        return (
          <div>
            <ProgramDetail />
          </div>
        )
      case 'Schedule & Rate':
        return (
          <div>
            <Schedule />
          </div>
        )
      case 'Calendar':
        return (
          <div>
            <Calendar />
          </div>
        )
      default: 
        return (
        <div>
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
)(MainContent)