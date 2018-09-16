import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSection} from '../../actions/index';
import {currSections} from '../../helpers';
import NavBarTabs from './navBarTabs';

class NavBar extends Component {
  render(){
    return (
      <div>
        <NavBarTabs 
          tabs={currSections} 
          handleSelectSection={this.props.selectSection} 
        />
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