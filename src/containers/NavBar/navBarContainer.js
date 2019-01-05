import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSection} from '../../actions/index';
import {sections} from '../../helpers';
import NavBar from './navBar';
import './navBarStyleSheet.css';


class NavBarContainer extends Component {
  render(){
    return (
        <NavBar
          tabs={sections} 
          handleSelectSection={this.props.selectSection} 
          logo="/ChinaFriendsLogo.jpg"
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
)(NavBarContainer)