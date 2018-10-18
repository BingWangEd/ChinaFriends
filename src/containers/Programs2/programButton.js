import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './programsStyleSheet.css';

const styles = {
  grid: {
    width: '100%',
    textAlign: 'center',
    height: '320px',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    // boxShadow: '0 1px 2px' + colors.gray,
    paddingTop: '40px'
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
    color: 'black'
  },
  description: {
    margin: '20px',
    textAlign: 'left',
    color: colors.gray
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, ifSelected, description, imgSrc, selectProgram, unselectProgram, setProgramImage, unsetProgramImage }) => (
  <div style={[styles.grid, {backgroundColor: ifSelected ? colors.yellow : '#F8F8F8'}]}
    onMouseEnter={()=>{setProgramImage(imgSrc); selectProgram(title) }}
  >
    <img src={process.env.PUBLIC_URL+'icons/'+title+'.png'} alt="icon" />
    <h2 style={[styles.title]}>{title}</h2>
    <p style={[styles.description]}>{description}</p>
  </div>
)

export default Radium(ProgramButton);