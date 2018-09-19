import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const colorList = Object.keys(colors)

const styles = {
  fontHelveticaNeue: {
    fontFamily: 'Helvetica Neue'
  },
  fontArial: {
    fontFamily: 'Arial'
  },
  bold: {
    fontWeight: 'bold'
  },
  right: {
    float: 'right'
  },
  red: {
    color: colors.red
  },
  gray: {
    color: colors.gray
  },
  blue: {
    color: colors.blue
  },
  inline: {
    display: 'inline'
  },
  quoteMark: {
    fontSize: '50px',
    fontWeight: 'bold',
    margin: 0
  },
  wordsMark: {
    display: 'inline'
  }
};

const QuoteWords = ({ words, person, title }) => (
  <div>
    <div>
      <p style={[styles.blue, styles.quoteMark, styles.inline]}>"</p>
      <p style={[styles.fontHelveticaNeue, styles.gray, styles.inline]}>{words}</p>
    </div>
    <p style={[styles.fontArial, styles.right, styles.red]}>- <span style={[styles.bold]}>{person}</span> {title}</p>
  </div>
)

export default Radium(QuoteWords);

