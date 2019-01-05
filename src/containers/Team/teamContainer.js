import React, {Component} from 'react';
import {connect} from 'react-redux';
import {team} from '../../helpers';
import Team from './team';
import BannerView from '../HelperComponents/sessionBanner';

class TeamContainer extends Component {
  render(){
    return (
        <div>
          <BannerView imgSrc = 'images/Team.jpg' header = 'Meet The Team'
          />
          <Team team={team} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(TeamContainer)