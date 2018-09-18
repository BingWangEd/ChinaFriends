mport React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  headerStyle: {
    height: '60px'
  }
};

const colorList = Object.keys(colors)

const Quote = ({ words, person, title }) => (
  <div style={[styles.headerStyle]} >
    
  </div>
)

export default Radium(Quote);

