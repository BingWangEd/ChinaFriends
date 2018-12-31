import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgramSection from './programSection';
import BannerView from '../sessionBanner';
import {programs} from '../../helpers';

class ProgramDetail extends Component {
  render(){
    return (
        <div>
          <BannerView 
            imgSrc = "images/Experience.jpg"
            header = "Feel the Experience"
          />
          <ProgramSection programs={programs} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(ProgramDetail)