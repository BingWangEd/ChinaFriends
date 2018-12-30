import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../helpers';
import './helpersStyleSheet.css';

const styles = {
  background: {
    backgroundColor: colors.yellow,
    height: "6px",
    textAlign: "center",
    margin: '0 auto 4em auto',
    padding: 0,
    verticalAlign: "baseline",
    width: "200px",
    '@media screen and (min-width: 350px)': {
      width: "300px"
    },
    '@media screen and (min-width: 500px)': {
      width: "400px"
    }
  },
  words: {
    backgroundColor: "white",
    display: "inline-block",
    fontSize: "2rem",
    lineHeight: "10px",
    padding: "0 0.75rem",
    fontWeight: "800",
    margin: 0,
    color: colors.gray,
    '@media screen and (min-width: 350px)': {
      fontSize: "2.5rem"
    },
    '@media screen and (min-width: 500px)': {
      fontSize: "3rem"
    }
  }
};

const HeaderView = ({ header }) => (
  <div style={[styles.background]}>
    <h1 style={[styles.words]}>{header}</h1>
  </div>
)

export default Radium(HeaderView);