import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './navBarStyleSheet.css'

const styles = {
  headerStyle: {
    height: '60px',
    position: '-webkit-sticky', 
    position: 'sticky',
    top: 0,
    background: 'white'
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
    display: 'inline'
  },
  linkStyle: {
    width: '500px',
    paddingLeft: '16px',
    paddingRight: '16px',
    textAlign: 'center',
    color: colors.gray,
    fontFamily: 'Helvetica Neue',
  },
  tabStyle: {
    display: 'inline-block',
    margin: 0
  },
  logoStyle: {
    height: '50px',
    float: 'right'
  }
};

const colorList = Object.keys(colors)

const NavBarTabs = ({ tabs, handleSelectSection, logo }) => (
  <div style={[styles.headerStyle]} >
    <ul style={[styles.ulStyle]}>
    {
      Object.keys(tabs).map((key)=>{
        const classStyleNames = 'tab '+ colorList[tabs[key]-1]
        return (
            <li style={[styles.listStyle]} key={tabs[key]}>
              <a style={[styles.linkStyle]} onClick={(e)=>{e.preventDefault(); handleSelectSection(tabs[key])}}><h4 className={classStyleNames} style={[styles.tabStyle]} key={tabs[key]}>{key}</h4></a>
            </li>
        )
      })
    }
    </ul>
    <div><img style={[styles.logoStyle]} src={process.env.PUBLIC_URL+logo} alt="character" /></div>
  </div>
)

export default Radium(NavBarTabs);