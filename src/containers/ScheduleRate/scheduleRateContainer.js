import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addScheduleIntroDisplay, removeScheduleIntroDisplay} from '../../actions/index';
import {schedules, rates} from '../../helpers';
import ClassSchedule from './classSchedule';
import BannerView from '../HelperComponents/sessionBanner';
import ClassRates from './classRates';

class ScheduleRateContainer extends Component {
  render(){
    return (
      <div>
        <BannerView 
          imgSrc = "images/Schedule.jpg"
          header = "Find the Right Class"
        />
        <ClassSchedule 
          schedules={schedules}
          schedule_intro_display={this.props.schedule_intro_display}
          addScheduleIntroDisplay = {this.props.addScheduleIntroDisplay}
          removeScheduleIntroDisplay = {this.props.removeScheduleIntroDisplay}
        />
        <ClassRates rates = {rates} />
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
)(ScheduleRateContainer)