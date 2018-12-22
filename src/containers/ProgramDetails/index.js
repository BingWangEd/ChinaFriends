import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgramSection from './programSection';
import BannerView from '../sessionBanner';
import {programs} from '../../helpers';

class ProgramDetail extends Component {
  componentDidMount(){
    
    if (this.props.selected_program){
      switch (this.props.selected_program) {
        case 'Language':
          window.scrollTo({top: 410, left: 0, behavior: 'smooth'});
          break;
        case 'Culture':
          window.scrollTo({top: 1060, left: 0, behavior: 'smooth'});
          break;
        case 'Trip':
          window.scrollTo({top: 1620, left: 0, behavior: 'smooth'});
          break;
        case 'AfterSchool':
          window.scrollTo({top: 2180, left: 0, behavior: 'smooth'});
          break;
      }
    }
  }

  render(){
    return (
        <div>
          <BannerView 
            imgSrc = "images/Experience.jpg"
            header = "Get a Sneakpeak of the Experiences"
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