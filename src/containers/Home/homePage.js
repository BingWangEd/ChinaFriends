import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutContainer from './aboutContainer';
import ProgramsContainer from '../Programs/programsContainer';
import ContactsContainer from '../Contacts/contactsContainer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <AboutContainer />
        <ProgramsContainer />
        <ContactsContainer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(HomePage)