import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSection} from '../../actions/index';
import {sections} from '../../helpers';
import NavBarTabs from './navBarTabs';
import './navBarStyleSheet.css';

class NavBar extends Component {
  handleScrollToPosition = (e, position) => {
    e.preventDefault();
    window.scrollTo({top: position, left: 0, behavior: 'smooth'});
  }

  render(){
    return (
        <NavBarTabs 
          tabs={sections} 
          handleSelectSection={this.props.selectSection} 
          logo="/ChinaFriendsLogo.jpg"
          scrollToPosition={this.handleScrollToPosition}
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