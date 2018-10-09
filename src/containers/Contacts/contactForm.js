import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: '60px auto',
    width: '85%',
    textAlign: 'center'
  }
};

const ContactForm = ({ contactsInfo }) => (
  <div style={[styles.center]}>
    <h2>Get in Touch! We would love to hear from you.</h2>
    <h3>{contactsInfo.phone}</h3>
    <h3><a href={"mailto: "+contactsInfo.email}>{contactsInfo.email}</a></h3>
    <h3>Wednesday Class Location: {contactsInfo.WedClassLocation}</h3>
  </div>
)

export default Radium(ContactForm);

