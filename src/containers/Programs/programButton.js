import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './programsStyleSheet.css';

const styles = {
  grid: {
    width: '50%',
    textAlign: 'center',
    height: '220px',
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
    transition: 'all 0.8s'
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
    className={title} 
  >
    <h3 style={[styles.title, {marginTop: '15%', opacity: ifSelected ? '1' : '0'}]} className="Title">{title}</h3>
    <h3 style={[styles.title, {marginTop: '35%', opacity: ifSelected ? '0' : '1'}]} className="Title">{title}</h3>
    <div style={[styles.line, {top: ifSelected ? '28%' : '60%', opacity: ifSelected ? '1' : '0' }]}>
      <ul style={[styles.list]}>
        {
        description.map((item, index)=>{
          return (
              <li key={index}>
                <p style={[styles.item]}>{item}</p>
              </li>
          )
        })
        }
      </ul>
    </div>
  </div>
)

export default Radium(ProgramButton);