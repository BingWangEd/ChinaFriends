import React, {Component} from 'react';
import {connect} from 'react-redux';
import {team} from '../../helpers';
import TeamSection from './teamSection';
import BannerView from '../sessionBanner';

class Team extends Component {
  render(){
    return (
        <div>
          <BannerView imgSrc = 'images/Team.jpg' header = 'Meet The Team'
          />
          <TeamSection team={team} />
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Team)