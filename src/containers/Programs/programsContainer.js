import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram, setProgramImage, unsetProgramImage} from '../../actions/index';
import ProgramNames from './programNames';

class ProgramFlags extends Component {
  render(){
    return (
      <ProgramNames 
        programs={programs}
        selectProgram={this.props.selectProgram}
        setProgramImage={this.props.setProgramImage}
        unsetProgramImage={this.props.unsetProgramImage}
        programImage = {this.props.program_image}
      />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps,
  {selectProgram, setProgramImage, unsetProgramImage}
)(ProgramFlags)