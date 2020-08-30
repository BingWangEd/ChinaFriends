import React, {Component} from 'react';
import {connect} from 'react-redux';
import Banner from './banner';

class BannerContainer extends Component {
  render(){
    const chicagoBestImgSrc = "/ChgoMagBestOf.png"
    return (
      <Banner chicagoBestImgSrc = {chicagoBestImgSrc} />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(BannerContainer)