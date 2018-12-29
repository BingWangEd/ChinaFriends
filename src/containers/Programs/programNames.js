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
    width: '24.25%',
    '@media screen and (max-width: 850px)': {
        width: '48.50%'
      },
    '@media screen and (max-width: 400px)': {
        width: '100%',
        display: 'block'
      }
  },
  center: {
    margin: '60px auto',
    width: '85%',
    marginBottom: '60px'
  },
  centerMargin: {
    marginLeft: '0.5%',
    marginRight: '0.5%'
  },
  leftMargin: {
    marginRight: '0.5%'
  },
  rightMargin: {
    marginLeft: '0.5%'
  },
  animation: {
    transition: 'all 0.8s'
  },
  AfterSchoolResponsive: {
    '@media screen and (max-width: 850px)': {
        marginLeft: 0,
        marginTop: '5px'
      }
  },
  TripResponsive: {
    '@media screen and (max-width: 850px)': {
        marginTop: '5px'
      }
  },
  ResponsiveAll: {
    '@media screen and (max-width: 400px)': {
        margin: 0,
        marginTop: '5px'
      }
  }
};

const ProgramNames = ({ programs, currProgram, programImage, selectProgram, unselectProgram, setProgramImage, unsetProgramImage, selectSection }) => {
  let currNum = null;
  switch (currProgram) {
            case 'Language':
              currNum = 0;
              break;
            case 'Culture':
              currNum = 1;
              break;
            case 'AfterSchool':
              currNum = 2;
              break;
            case 'Trip':
              currNum = 3;
              break;
            default:
              currNum = null;
          }
  return (
    <div style={[styles.center]} className='clearfix'>
      <div className='clearfix'>
        <div style={[styles.programGrid, styles.leftMargin, styles.ResponsiveAll]}>
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
            selectSection={selectSection}
          />
        </div>
        <div style={[styles.programGrid, styles.centerMargin, styles.ResponsiveAll]}>
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
            selectSection={selectSection}
          />
        </div>
        <div style={[styles.programGrid, styles.centerMargin, styles.AfterSchoolResponsive, styles.ResponsiveAll]}>
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
            selectSection={selectSection}
          />
        </div>
        <div style={[styles.programGrid, styles.rightMargin, styles.TripResponsive, styles.ResponsiveAll]}>
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
            selectSection={selectSection}
          />
        </div>
      </div>
    </div>
  )
}



export default Radium(ProgramNames);