import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  headerStyle: {
    height: '60px'
  }
};

const colorList = Object.keys(colors)

const ProgramImageDisplay = ({ }) => (
  <div style={[styles.headerStyle]} >
    image
  </div>
)

export default Radium(ProgramImageDisplay);