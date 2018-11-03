import React, { Component } from 'react';
import {connect} from 'react-redux'
import ContactForm from './contactForm';
import {contacts} from '../../helpers';

class Contacts extends Component {
  render() {
    return (
      <section className='contact'><ContactForm contactsInfo = {contacts} /></section>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Contacts);