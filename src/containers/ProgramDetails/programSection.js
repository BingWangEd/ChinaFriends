import React, {Component} from 'react';
import Radium from 'radium';
import './programStyle.css'
import {colors} from '../../helpers';
import ProgramDisplay from './programDisplay';

const ProgramSection = ({programs}) => (
  <div className='row'>
  {
    Object.keys(programs).map((program, index)=>{
      return (
        <div key={index}>
          <ProgramDisplay programImage={programs[program].imgSrc} items={programs[program].items} title={program}/>
        </div>
      )
    })
  }
  </div>
)
export default Radium(ProgramSection);