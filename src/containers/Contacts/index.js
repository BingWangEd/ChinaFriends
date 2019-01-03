import React, {Component} from 'react';
import {connect} from 'react-redux';
import About from '../Home/aboutPage';
import Programs from '../Programs';
import Contacts from './contactSection';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <About />
        <Programs />
        <Contacts />
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