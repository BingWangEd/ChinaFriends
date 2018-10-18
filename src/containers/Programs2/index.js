import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram} from '../../actions/index';
import ProgramFlags from './programsContainer';

class Programs extends Component {
  render(){
    return (
      <div id='program'>
        <ProgramFlags 
        programs={programs} 
        handleSelectProgram={this.props.selectProgram} 
      />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps,
  { selectProgram }
)(Programs)