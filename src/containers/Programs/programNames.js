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
    width: '36%'
  }
};

const ProgramNames = ({ programs, programImage, selectProgram, setProgramImage, unsetProgramImage }) => (
  <div>
    <div style={[styles.programGrid]}>
      <div>
        <ProgramButton 
          title="Language"
          id={programs["Language"].id}
          description={programs["Language"].description}
          imgSrc={programs["Language"].imgSrc}
          selectProgram={selectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
        <ProgramButton 
          title="Culture"
          id={programs["Culture"].id}
          description={programs["Culture"].description}
          imgSrc={programs["Culture"].imgSrc}
          selectProgram={selectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
      </div>
      <div>
        <ProgramButton 
          title="AfterSchool"
          id={programs["AfterSchool"].id}
          description={programs["AfterSchool"].description}
          imgSrc={programs["AfterSchool"].imgSrc}
          selectProgram={selectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
        <ProgramButton 
          title="Trip"
          id={programs["Trip"].id}
          description={programs["Trip"].description}
          imgSrc={programs["Trip"].imgSrc} 
          selectProgram={selectProgram}
          setProgramImage={setProgramImage}
          unsetProgramImage={unsetProgramImage}
        />
      </div>
    </div>
    <div style={[styles.inlineBlock]}>
      <ProgramImageDisplay programImage={programImage} />
    </div>
  </div>
)

export default Radium(ProgramNames);