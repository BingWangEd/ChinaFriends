import React, {Component} from 'react';
import {connect} from 'react-redux';
import Quote from './quote';

class QuoteContainer extends Component {
  render(){
    
    const person = "Zhaoyi Liu"
    const title = "parent, teacher, CEO of ChinaFriends"
    return (
        <Quote
          person = {person}
          title = {title}
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(QuoteContainer)