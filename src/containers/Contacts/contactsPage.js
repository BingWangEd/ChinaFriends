import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutContainer from '../Home/aboutContainer';
import ProgramsContainer from '../Programs/programsContainer';
import ContactsContainer from './contactsContainer';

class ContactPage extends Component {
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
)(ContactPage)