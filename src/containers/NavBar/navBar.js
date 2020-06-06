import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import './navBarStyleSheet.css';
import NavList from './navList';
import BurgerMenu from './burgerMenu'

class NavBar extends Component {
  render(){
    const styles = {
    headerStyle: {
      position: 'sticky',
      overflow: 'auto',
      top: 0,
      background: 'white',
      zIndex: '9',
      width: '100%'
    },
    logoStyle: {
      height: '50px',
      float: 'right'
    },
    center: {
      margin: 'auto',
      width: '85%'
    },
    burgerMenuResponsive: {
      '@media screen and (min-width: 1020px)': {
        display: 'none'
      }
    },
    listMenuResponsive: {
      position: 'absolute',
      float: 'left',
      paddingLeft: 0,
      '@media screen and (max-width: 1020px)': {
        display: 'none'
      }
    }
  };

  return (
    <div style={[styles.headerStyle]} >
      <div style={[styles.center]}>
        <div><img style={[styles.logoStyle]} src={process.env.PUBLIC_URL+this.props.logo} alt="character" /></div>
        <div style={[styles.burgerMenuResponsive]}>
          <BurgerMenu
            tabs = {this.props.tabs} 
            handleSelectSection = {this.props.handleSelectSection} 
          />
        </div>
        <div style={[styles.listMenuResponsive]}>
          <NavList 
            tabs = {this.props.tabs} 
            handleSelectSection = {this.props.handleSelectSection}
          />
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(NavBar))