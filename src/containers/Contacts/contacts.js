import React from 'react';
import Radium from 'radium';

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
    minHeight: '550px',
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
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.7)',
    width: '40%',
    minHeight: '450px',
    margin: 'auto',
    '@media screen and (max-width: 850px)': {
        width: '70%',
        minHeight: '400px'
      }
  },
  infoStyle: {
    fontFamily: "'Comfortaa', cursive",
    fontStyle: 'normal'
  },
  bannerHeaderStyle: {
    fontSize: '33pt',
    '@media screen and (max-width: 880px)': {
        fontSize: '28pt'
      },
    '@media screen and (max-width: 380px)': {
        fontSize: '18pt'
      }
  },
  emailStyle: {
    '@media screen and (max-width: 380px)': {
        fontSize: '15pt'
      }
  }
};

const Contacts = ({ contactsInfo }) => (
  <div style={[styles.backgroundImage, styles.center]}>
    <div style={[styles.arrowDown]}></div>
    <div style={[styles.banner]}>
      <h1 style={[styles.bannerHeaderStyle]}>Get in Touch!</h1>
      <h2 style={[styles.infoStyle]}>{contactsInfo.phone}</h2>
      <h2 style={[styles.infoStyle, styles.emailStyle]}><a href={"mailto: "+contactsInfo.email}>{contactsInfo.email}</a></h2>
      <h2>Class Location:</h2>
      <h2 style={[styles.infoStyle]}>{contactsInfo.WedClassLocation}</h2>
    </div>
  </div>
)

export default Radium(Contacts);

