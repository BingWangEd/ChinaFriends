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
    display: 'inline-block',
    cursor: 'pointer'
  },
  line: {
    width: '50%',
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: colors.yellow,
    position: 'absolute',
    left: '25%',
    transition: 'all 0.8s'
  },
  title: {
    color: 'white',
    fontFamily: "'Comfortaa', cursive",
    transition: 'all 0.8s',
    position: 'relative',
    fontSize: '21pt'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0
  },
  item: {
    color: 'white'
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, ifSelected, description, imgSrc, selectProgram, unselectProgram, setProgramImage, unsetProgramImage }) => (
  <div 
    onMouseEnter={()=>{setProgramImage(imgSrc); selectProgram(title) }}
    onMouseLeave={()=>{unselectProgram()}}
    style={[styles.grid, {background: id%2.0===0 ? colors.blue : colors.lightBlue}]}
  >
      <div >
        <h3 style={[styles.title, {top: ifSelected ? '60px' : '135px'}]} className="Title">{title}</h3>
        <div style={[styles.line, {top: ifSelected ? '70%' : '60%', opacity: ifSelected ? '1' : '0' }]}>
      </div>
    </div>
  </div>
)

export default Radium(ProgramButton);