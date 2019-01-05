import React from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  bold: {
    fontWeight: 'bold'
  },
  quoteMark: {
    fontSize: '150px',
    fontWeight: '800',
    margin: 0,
    fontFamily: "'Archivo Black', sans-serif",
    color: colors.blue,
    display: 'inline',
    float: 'left',
    width: '10%',
    "@media screen and (max-width: 900px)": {
      fontSize: '100px'
    }
  },
  words: {
    fontFamily: "'Comfortaa', cursive",
    display: 'inline',
    fontStyle: 'light',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '40px',
    color: colors.gray,
    float: 'left',
    width: '90%',
    "@media screen and (max-width: 720px)": {
      fontSize: '23px'
    }
  },
  author:{
    float: 'right',
    color: colors.red,
    fontSize: '25px',
    "@media screen and (max-width: 500px)": {
      fontSize: '18px'
    }
  },
  center: {
    margin: '60px auto',
    width: '85%'
  },
  highlight: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#484848',
    "@media screen and (max-width: 720px)": {
      fontSize: '23px'
    }
  }
};

const QuoteWords = ({ person, title }) => (
  <div style={[styles.center]}>
    <div>
      <p style={[styles.quoteMark]}>&ldquo;</p>
      <p style={[styles.words]}>Founded in 2004, ChinaFriends is dedicated to bringing the <span style={[styles.highlight]}>best Chinese language and culture education</span> to the City of Chicago.</p>
    </div>
    <p style={[styles.author]}>- <span style={[styles.bold]}>{person}</span> {title}</p>
  </div>
)

export default Radium(QuoteWords);

