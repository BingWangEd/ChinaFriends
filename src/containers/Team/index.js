import React, {Component} from 'react';
import {connect} from 'react-redux';
import {team} from '../../helpers';
import TeamSection from './teamSection';
import TeamBannerView from './teamImageBanner';

class Team extends Component {
  render(){
    return (
        <div>
          <TeamBannerView />
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