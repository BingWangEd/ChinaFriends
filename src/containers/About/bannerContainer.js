import React, {Component} from 'react';
import {connect} from 'react-redux';
import Banner from './banner';

class Banner extends Component {
  render(){
    return (
        <Banner 
          imgSrc = 
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps, 
  {selectSection}
)(Banner)