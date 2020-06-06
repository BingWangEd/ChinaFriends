import React, {Component} from 'react';
import {connect} from 'react-redux';

import BannerView from '../HelperComponents/sessionBanner';
import SummerCamp from './summerCamp';

class SummerCampContainer extends Component {
  render(){
    return (
        <div>
          <BannerView imgSrc = 'images/SummerCamp.jpg' header = 'See the World at Home'
          />
          <SummerCamp />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(SummerCampContainer)