import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram, unselectProgram, setProgramImage, unsetProgramImage, selectSection} from '../../actions/index';
import ProgramNames from './programNames';

class ProgramFlags extends Component {
  componentDidMount(){
    this.props.unselectProgram();
  }

  render(){
    return (
      <ProgramNames 
        programs={programs}
        currProgram={this.props.selected_program}
        selectProgram={this.props.selectProgram}
        unselectProgram={this.props.unselectProgram}
        setProgramImage={this.props.setProgramImage}
        unsetProgramImage={this.props.unsetProgramImage}
        programImage = {this.props.program_image}
        selectSection = {this.props.selectSection}
      />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps,
  {selectProgram, unselectProgram, setProgramImage, unsetProgramImage, selectSection}
)(ProgramFlags)