import React, {Component} from 'react';
import {connect} from 'react-redux';
import Quote from './quote';

class Quote extends Component {
  const words = "Founded in 2002, we are dedicated to bringing the best Chinese language and culture education to the City of Chicago."
  const person = "Zhaoyi Liu"
  const title = "parent, teacher, CEO of ChinaFriends"
  render(){
    return (
        <Quote 
          words = {words}
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
  mapStateToProps, 
  {selectSection}
)(Quote)