import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSection} from '../../actions/index';
import {sections} from '../../helpers';
import NavBarTabs from './navBarTabs';
import './navBarStyleSheet.css';


class NavBar extends Component {
  render(){
    return (
        <NavBarTabs 
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
)(NavBar)