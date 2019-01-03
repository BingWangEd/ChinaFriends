import React, {Component} from 'react';
import {connect} from 'react-redux';
import BannerView from './bannerView';

class Banner extends Component {
  render(){
    const imgSrc = "/Images/Front.jpg"
    const chicagoBestImgSrc = "/ChgoMagBestOf.png"
    return (
      <BannerView imgSrc = {imgSrc} chicagoBestImgSrc = {chicagoBestImgSrc} />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Banner)