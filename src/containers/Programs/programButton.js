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
    width: '50%',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.blue,
    position: 'absolute',
    left: '25%',
    transition: 'all 0.8s'
  },
  title: {
    color: colors.yellow,
    margin: 0,
    paddingTop: '15%'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0
  }
};

const colorList = Object.keys(colors)

const ProgramButton = ({ title, id, ifSelected, description, imgSrc, selectProgram, unselectProgram, setProgramImage, unsetProgramImage }) => (
  <div 
    onMouseEnter={()=>{setProgramImage(imgSrc); selectProgram(title) }}
    onMouseLeave={()=>{unselectProgram()}}
    style={[styles.grid, {background: id%2.0===0 ? colors.red : colors.gray}]}
    className={title} 
  >
    <h3 id={title+'Title'} style={[styles.title]}>{title}</h3>
    <div style={[styles.line, {top: ifSelected ? '28%' : '60%', opacity: ifSelected ? '1' : '0' }]}>
      <ul style={[styles.list]}>
        {
        description.map((item, index)=>{
          return (
              <li key={index}>
                <p>{item}</p>
              </li>
          )
        })
        }
      </ul>
    </div>
  </div>
)

export default Radium(ProgramButton);