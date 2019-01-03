import React, {Component} from 'react';
import {connect} from 'react-redux';
import About from './aboutPage';
import Programs from '../Programs';
import Contacts from '../Contacts/contactSection';

class HomePage extends Component {
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
)(HomePage)