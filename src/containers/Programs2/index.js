import React, {Component} from 'react';
import {connect} from 'react-redux';
import {programs} from '../../helpers';
import {selectProgram, selectSection} from '../../actions/index';
import ProgramFlags from './programsContainer';
// you can delete this page. Make programsContainer index.js; refactoring needed
class Programs extends Component {
  render(){
    return (
      <div id='program'>
        <ProgramFlags 
        programs={programs} 
        handleSelectProgram={this.props.selectProgram}
        selectSection = {this.props.selectSection}
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