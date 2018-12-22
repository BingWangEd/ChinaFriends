import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addScheduleIntroDisplay, removeScheduleIntroDisplay} from '../../actions/index';
import {schedules} from '../../helpers';
import ScheduleTable from './scheduleTable';
import BannerView from '../sessionBanner';

class Schedule extends Component {
  render(){
    return (
      <div>
        <BannerView 
          imgSrc = "images/Schedule.jpg"
          header = "Course Introduction and Schedule"
        />
        <ScheduleTable 
          schedules={schedules}
          schedule_intro_display={this.props.schedule_intro_display}
          addScheduleIntroDisplay = {this.props.addScheduleIntroDisplay}
          removeScheduleIntroDisplay = {this.props.removeScheduleIntroDisplay}
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
  {addScheduleIntroDisplay, removeScheduleIntroDisplay}
)(Schedule)