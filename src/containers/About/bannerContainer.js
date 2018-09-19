import React, {Component} from 'react';
import {connect} from 'react-redux';
import BannerView from './bannerView';

class Banner extends Component {
  render(){
    const imgSrc = "/Images/Front.jpg"
    return (
        <BannerView 
          imgSrc = {imgSrc}
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Banner)