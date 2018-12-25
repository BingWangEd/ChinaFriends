import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../helpers';
import './helpersStyleSheet.css';

const styles = {
  background: {
    backgroundColor: colors.yellow,
    height: "6px",
    textAlign: "center",
    marginTop: 0,
    marginBottom: "4em",
    padding: 0,
    verticalAlign: "baseline",
    width: "400px"
  },
  words: {
    backgroundColor: "white",
    display: "inline-block",
    fontSize: "3rem",
    lineHeight: "10px",
    padding: "0 0.75rem",
    fontWeight: "800",
    margin: 0,
    color: colors.gray
  }
};

const HeaderView = ({ header }) => (
    <div style={[styles.background]}>
      <h1 style={[styles.words]}>{header}</h1>
    </div>   
)

export default Radium(HeaderView);