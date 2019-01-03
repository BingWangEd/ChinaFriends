import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import {NavLink} from 'react-router-dom';

const colorList = Object.keys(colors)

const styles = {
    ulStyle: {
      paddingLeft: 0
    },
    listStyle: {
      listStyleType: 'none',
      display: 'inline',
      cursor: 'pointer',
      '@media screen and (max-width: 760px)': {
        display: 'block',
        paddingTop: '5px'
      }
    },
    linkStyle: {
      width: '500px',
      paddingLeft: '16px',
      paddingRight: '16px',
      textAlign: 'center',
      color: colors.gray,
      fontFamily: "'Comfortaa', cursive"
    },
    tabStyle: {
      display: 'inline-block',
      margin: 0
    }
  };

const NavList = ({tabs, handleSelectSection }) => (
  <ul style={[styles.ulStyle]}>
  {
    Object.keys(tabs).map((key, index)=>{
      const classStyleNames = 'tab '+ colorList[(tabs[key]%5)-1]
      if (key === 'Contact') {
        return (
          <li style={[styles.listStyle]} key={tabs[key]} onClick={(e)=>{e.preventDefault(); handleSelectSection(key); }}>
            <NavLink to="/Contact" style={styles.linkStyle}><h4 className={classStyleNames} style={[styles.tabStyle]} key={tabs[key]}>{key}</h4></NavLink>
          </li>
        )
      } else {
        return (
          <li style={[styles.listStyle]} key={tabs[key]} onClick={(e)=>{e.preventDefault(); handleSelectSection(key); }}>
            <NavLink to={key === 'Home' ? '/' : `/${key.replace(/ & /g, '')}`} style={styles.linkStyle}><h4 className={classStyleNames} style={[styles.tabStyle]}>{key}</h4></NavLink>
          </li>
        )
      }
    })
  }
  </ul>
)
export default Radium(NavList);