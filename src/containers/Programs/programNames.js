import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import ProgramButton from './programButton';
import ProgramImageDisplay from './programImageDisplay';
import './programsStyleSheet.css';

const styles = {
  programGrid: {
    display: 'inline',
    float: 'left',
    width: '40%'
  },
  center: {
    margin: '60px auto',
    width: '85%'
  }
};

const ProgramNames = ({ programs, currProgram, programImage, selectProgram, unselectProgram, setProgramImage, unsetProgramImage }) => (
  <div style={[styles.center]}>
    <div style={[styles.programGrid]}>
        <ProgramButton 
          title="Language"
          id={programs["Language"].id}
          ifSelected={currProgram==="Language" ? true : false}
          description={programs["Language"].description}
          imgSrc={programs["Language"].imgSrc}
          selectProgram={selectProgram}
          unselectProgram={unselectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
        <ProgramButton 
          title="Culture"
          id={programs["Culture"].id}
          ifSelected={currProgram==="Culture" ? true : false}
          currProgram={currProgram}
          description={programs["Culture"].description}
          imgSrc={programs["Culture"].imgSrc}
          selectProgram={selectProgram}
          unselectProgram={unselectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
        <ProgramButton 
          title="AfterSchool"
          id={programs["AfterSchool"].id}
          ifSelected={currProgram==="AfterSchool" ? true : false}
          currProgram={currProgram}
          description={programs["AfterSchool"].description}
          imgSrc={programs["AfterSchool"].imgSrc}
          selectProgram={selectProgram}
          unselectProgram={unselectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
        <ProgramButton 
          title="Trip"
          id={programs["Trip"].id}
          ifSelected={currProgram==="Trip" ? true : false}
          currProgram={currProgram}
          description={programs["Trip"].description}
          imgSrc={programs["Trip"].imgSrc} 
          selectProgram={selectProgram}
          unselectProgram={unselectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
    </div>
    <div style={[styles.inlineBlock]}>
      <ProgramImageDisplay 
        programImage={programImage} 
        items={currProgram ? programs[currProgram].items : null}
      />
    </div>
  </div>
)

export default Radium(ProgramNames);