import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './programsStyleSheet.css';

const styles = {
  grid: {
    width: '50%',
    textAlign: 'center',
    height: '200px',
    position: 'relative',
    display: 'inline-block'
  },
  line: {
    width: '40%',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.blue,
    position: 'absolute',
    bottom: '20%',
    left: '30%'
  },
  title: {
    color: colors.yellow,
    margin: 0,
    paddingTop: '15%'
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, description, imgSrc, selectProgram, setProgramImage, unsetProgramImage }) => (
  <div 
    onMouseEnter={()=>setProgramImage(imgSrc)}
    id={title} 
    style={[styles.grid, {background: id%2.0===0 ? colors.red : colors.gray}]} 
  >
    <h3 style={[styles.title]}>{title}</h3>
    <div style={[styles.line]}></div>
  </div>
)

export default Radium(ProgramButton);