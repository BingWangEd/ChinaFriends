import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import ProgramButton from './programButton';

const styles = {
  headerStyle: {
    height: '60px'
  }
};

const colorList = Object.keys(colors)

const ProgramNames = ({ programs, selectProgram }) => (
  <div style={[styles.headerStyle]} >
    <ul>
    {
      Object.keys(programs).map((key)=>{
        return (
            <ProgramButton 
              title={key}
              id={programs[key].id}
              description={programs[key].description}
              imgSrc={programs[key].imgSrc}
            />
        )
      })
    }
    </ul>
  </div>
)

export default Radium(ProgramNames);