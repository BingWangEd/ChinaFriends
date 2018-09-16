//to delete

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSection} from '../../actions/index';
import {currSections} from '../../helpers';

class NavBar extends Component {
  handleSelectSection = (key) => (e) => {
    e.preventDefault(); 
    this.props.selectSection(key)
  }

  render(){
    return (
      <div>
        <ul>
          {
            Object.keys(currSections).map((key)=>{
              return (
                  <li key={currSections[key]}>
                    <button onClick={this.handleSelectSection(currSections[key])}>{key}</button>
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps, 
  {selectSection}
)(NavBar)