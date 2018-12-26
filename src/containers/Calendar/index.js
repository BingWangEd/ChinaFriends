import React, {Component} from 'react';
import {connect} from 'react-redux';
import {holidays} from '../../helpers';
import {quarters} from '../../helpers';
import BannerView from '../sessionBanner';
import CalendarSection from './calendarSection';

class Calendar extends Component {
  render(){
    return (
        <div>
          <BannerView imgSrc = 'images/Calendar.jpg' header = 'Mark the Date'
          />
          <CalendarSection holidays={holidays} quarters={quarters} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Calendar)