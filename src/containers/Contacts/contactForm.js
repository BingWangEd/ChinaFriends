import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: '60px auto 0 auto',
    textAlign: 'center',
    width: '100%'
  },
  arrowDown: {
    width: 0,
    height: 0, 
    borderLeft: '40px solid transparent',
    borderRight: '40px solid transparent',
    borderTop: '40px solid white',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-40px)'
  },
  backgroundImage: {
    minHeight: '500px',
    backgroundImage: "url('images/ContactBackground.jpg')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  banner: {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.7)',
    width: '450px',
    minHeight: '450px',
    margin: 'auto'
  },
  infoStyle: {
    fontFamily: "'Comfortaa', cursive",
    fontStyle: 'normal'
  }
};

const ContactForm = ({ contactsInfo }) => (
  <div style={[styles.backgroundImage, styles.center]}>
    <div style={[styles.arrowDown]}></div>
    <div style={[styles.banner]}>
      <h1 style={[{fontSize: '33pt'}]}>Get in Touch!</h1>
      <h2 style={[styles.infoStyle]}>{contactsInfo.phone}</h2>
      <h2 style={[styles.infoStyle]}><a href={"mailto: "+contactsInfo.email}>{contactsInfo.email}</a></h2>
      <h2>Class Location:</h2>
      <h2 style={[styles.infoStyle]}>{contactsInfo.WedClassLocation}</h2>
    </div>
  </div>
)

export default Radium(ContactForm);

