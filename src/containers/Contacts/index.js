import React, { Component } from 'react';
import ContactForm from './contactForm';
import {contacts} from '../../helpers';

class Contacts extends Component {
  render() {
    return (
      <div id='Contact'>
        <ContactForm contactsInfo = {contacts} />
      </div>
    );
  }
}

export default Contacts;