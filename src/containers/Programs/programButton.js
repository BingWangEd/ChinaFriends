import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './programsStyleSheet.css';
import {NavLink} from 'react-router-dom';

const styles = {
  grid: {
    width: '100%',
    textAlign: 'center',
    height: '300px',
    position: 'relative',
    display: 'inline-block',
    paddingTop: '40px',
    cursor: 'pointer'
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
    color: 'black'
  },
  description: {
    margin: '20px',
    textAlign: 'left',
    color: colors.gray
  },
  button: {
    borderRadius: '4px',
    border: 'none',
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '4px 2px',
    color: 'white',
    backgroundColor: colors.red,
    fontFamily: "'Comfortaa', cursive",
    width: '80%',
    position: 'absolute',
    bottom: '10px',
    left: '10%',
    cursor: 'pointer',
    Zindex: '9'
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, ifSelected, description, imgSrc, selectProgram, unselectProgram, setProgramImage, unsetProgramImage, selectSection }) => (
  <NavLink to="/Programs"><div style={[styles.grid, {backgroundColor: ifSelected ? colors.yellow : '#F8F8F8'}]}
    onMouseEnter={()=>{setProgramImage(imgSrc); selectProgram(title) }}
    onMouseLeave={()=>{unselectProgram()}}
    onClick={()=>{ selectSection('Programs') }}
  >
    <img src={process.env.PUBLIC_URL+'icons/'+title+'.png'} alt="icon" />
    <h2 style={[styles.title]}>{title}</h2>
    <p style={[styles.description, {color: ifSelected ? 'black' : colors.gray}]}>{description}</p>
  </div></NavLink>
)

export default Radium(ProgramButton);