import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../helpers';
import './helpersStyleSheet.css';

const styles = {
  iconStyle: {
    width: '35px'
  },
  iconPositionStyle: {
    position: 'fixed',
    top: '93vh',
    right: '10px',
    zIndex: '1',
    height: 0
  }
};

const FackbookIcon = ({ header }) => (
    <div style={[styles.iconPositionStyle]}>
      <a href = "https://www.facebook.com/ChinaFriendUSA"><img style={[styles.iconStyle]} src = {process.env.PUBLIC_URL+ 'icons/Facebook.png'} /></a>
    </div>   
)

export default Radium(FackbookIcon);