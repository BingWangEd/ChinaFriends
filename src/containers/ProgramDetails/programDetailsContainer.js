import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgramDetails from './programDetails';
import BannerView from '../HelperComponents/sessionBanner';
import {programs} from '../../helpers';

class ProgramDetailContainer extends Component {
  render(){
    return (
        <div>
          <BannerView 
            imgSrc = "images/Experience.jpg"
            header = "Feel the Experience"
          />
          <ProgramDetails programs={programs} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(ProgramDetailContainer)