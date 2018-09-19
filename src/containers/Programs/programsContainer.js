import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram} from '../../actions/index';
import ProgramNames from './programNames';

class ProgramFlags extends Component {
  render(){
    return (
      <ProgramNames 
        programs={programs}
        selectProgram={this.props.selectProgram}
      />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(ProgramFlags)