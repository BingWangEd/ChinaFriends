import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgramSection from './programSection';
import ProgramBannerView from './programImageBanner';
import {programs} from '../../helpers';
class ProgramDetail extends Component {
  render(){
    return (
        <div>
          <ProgramBannerView />
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