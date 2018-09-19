import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  headerStyle: {
    height: '60px'
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, description, imgSrc }) => (
  <div style={[styles.headerStyle]} >
    title: {title} 
    info: {description}
  </div>
)

export default Radium(ProgramButton);