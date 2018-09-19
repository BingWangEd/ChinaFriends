import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram} from '../../actions/index';
import ProgramImageDisplay from './ProgramImageContainer';

class ProgramImage extends Component {
  render(){
    return (
      <ProgramImageDisplay />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(ProgramImage)