import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';


const colorList = Object.keys(colors)

const styles = {
  bold: {
    fontWeight: 'bold'
  },
  quoteMark: {
    fontSize: '130px',
    margin: 0,
    fontFamily: "'Archivo Black', sans-serif",
    color: colors.blue,
    display: 'inline',
    float: 'left',
    width: '10%'
  },
  words: {
    display: 'inline',
    fontFamily: 'Helvetica Neue',
    fontSize: '25px',
    color: colors.gray,
    display: 'inline',
    float: 'left',
    width: '90%'
  },
  author:{
    fontFamily: 'Arial',
    float: 'right',
    color: colors.red,
    fontSize: '25px'
  },
  center: {
    margin: '60px auto',
    width: '85%'
  }
};

const QuoteWords = ({ words, person, title }) => (
  <div style={[styles.center]}>
    <div>
      <p style={[styles.quoteMark]}>&ldquo;</p>
      <p style={[styles.words]}>{words}</p>
    </div>
    <p style={[styles.author]}>- <span style={[styles.bold]}>{person}</span> {title}</p>
  </div>
)

export default Radium(QuoteWords);

