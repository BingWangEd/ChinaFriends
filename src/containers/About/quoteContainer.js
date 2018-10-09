import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuoteWords from './quoteWords';

class Quote extends Component {
  render(){
    
    const person = "Zhaoyi Liu"
    const title = "parent, teacher, CEO of ChinaFriends"
    return (
        <QuoteWords
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
)(Quote)