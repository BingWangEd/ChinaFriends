import React, {Component} from 'react';
import {connect} from 'react-redux';
import {schedules} from '../../helpers';
import {addScheduleIntroDisplay, removeScheduleIntroDisplay} from '../../actions/index';
import ScheduleTable from './scheduleTable';

class Schedule extends Component {
  render(){
    return (
      <ScheduleTable 
        schedules={schedules}
        schedule_intro_display={this.props.schedule_intro_display}
        addScheduleIntroDisplay = {addScheduleIntroDisplay}
        removeScheduleIntroDisplay = {removeScheduleIntroDisplay}
      />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps,
  {addScheduleIntroDisplay, removeScheduleIntroDisplay}
)(Schedule)