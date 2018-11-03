import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './navBarStyleSheet.css';

const styles = {
  headerStyle: {
    height: '60px',
    position: '-webkit-sticky', 
    position: 'sticky',
    top: 0,
    background: 'white',
    zIndex: '9'
  },
  ulStyle: {
    position: 'absolute',
    bottom: 0,
    float: 'left',
    marginBottom: '10px',
    paddingLeft: 0
  },
  listStyle: {
    listStyleType: 'none',
    display: 'inline',
    cursor: 'pointer'
  },
  linkStyle: {
    width: '500px',
    paddingLeft: '16px',
    paddingRight: '16px',
    textAlign: 'center',
    color: colors.gray,
    fontFamily: "'Comfortaa', cursive",
  },
  tabStyle: {
    display: 'inline-block',
    margin: 0
  },
  logoStyle: {
    height: '50px',
    float: 'right'
  },
  center: {
    margin: 'auto',
    width: '85%'
  }
};

const colorList = Object.keys(colors)

const NavBarTabs = ({ tabs, handleSelectSection, logo, scrollToPosition }) => (
  <div style={[styles.headerStyle]} >
    <div style={[styles.center]}>
      <ul style={[styles.ulStyle]}>
      {
        Object.keys(tabs).map((key)=>{
          const classStyleNames = 'tab '+ colorList[tabs[key]-1]
          if (key === 'Contact') {
            return (
              <li style={[styles.listStyle]} key={tabs[key]}>
                <a style={[styles.linkStyle]} onClick={(e)=>{e.preventDefault(); handleSelectSection(key); scrollToPosition(e, 4000) }}><h4 className={classStyleNames} style={[styles.tabStyle]} key={tabs[key]}>{key}</h4></a>
              </li>
            )
          } else {
            return (
              <li style={[styles.listStyle]} key={tabs[key]}>
                <a style={[styles.linkStyle]} onClick={(e)=>{e.preventDefault(); handleSelectSection(key); scrollToPosition(e, 0) }}><h4 className={classStyleNames} style={[styles.tabStyle]} key={tabs[key]}>{key}</h4></a>
              </li>
            )
          }
        })
      }
      </ul>
      <div><img style={[styles.logoStyle]} src={process.env.PUBLIC_URL+logo} alt="character" /></div>
    </div>
  </div>
)

export default Radium(NavBarTabs);