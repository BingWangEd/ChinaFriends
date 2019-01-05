import React, {Component} from 'react';
import {connect} from 'react-redux';
import {holidays} from '../../helpers';
import {quarters} from '../../helpers';
import BannerView from '../HelperComponents/sessionBanner';
import Calendar from './calendar';

class CalendarContainer extends Component {
  render(){
    return (
        <div>
          <BannerView imgSrc = 'images/Calendar.jpg' header = 'Mark the Date'
          />
          <Calendar holidays={holidays} quarters={quarters} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(CalendarContainer)