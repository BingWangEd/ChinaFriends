import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  div: {
    width: '60%',
    height: '440px',
    position: 'relative',
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    transition: 'all 3s ease'
  }
};


const colorList = Object.keys(colors)

const ProgramImageDisplay = ({ programImage }) => (
  <div style={[styles.div]}><img style={[styles.image]} src={process.env.PUBLIC_URL+programImage} alt="program image" /></div>
)

export default Radium(ProgramImageDisplay);