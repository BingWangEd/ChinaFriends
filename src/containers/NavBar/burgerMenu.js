import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import NavList from './navList';

let menuOpen = false

class BurgerMenu extends Component{
  render(){
    const styles = {
      burgerListStyle: {
        margin: 0,
        padding: 0,
        cursor: 'pointer'
      },
      burgerIconStyle: {
        listStyleType: 'none'
      },
      iconStyle: {
        height: '30px',
        display: 'inline',
        paddingTop: '10px',
      },
      dropdownMenuStyle: {
        position: 'absolute',
        top: '50px',
        left: 0,
        display: 'block'
      }
    }

    const handleClickBurgerButton = (e) => {
      e.preventDefault()
      menuOpen = !menuOpen
      this.forceUpdate()
    } 

    return (
      <div>
        <ul style={[styles.burgerListStyle]}>
          <li style={[styles.burgerIconStyle]}>
            <a onClick={handleClickBurgerButton}><img style={[styles.iconStyle]} src = {process.env.PUBLIC_URL+'icons/MenuIcon.png'} alt='burger menu' /></a>
          </li>
        </ul>
          { menuOpen ? 
            (<div style={[styles.dropdownMenusStyle]}><NavList 
              tabs = {this.props.tabs} 
              handleSelectSection = {this.props.handleSelectSection} 
              /></div>) : null
          }
      </div>
    )
  }
} 

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(BurgerMenu));