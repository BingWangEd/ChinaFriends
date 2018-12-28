import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const colorList = Object.keys(colors)

const styles = {
    ulStyle: {
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
      fontFamily: "'Comfortaa', cursive"
    },
    tabStyle: {
      display: 'inline-block',
      margin: 0
    }
  };

const NavList = ({tabs, handleSelectSection, scrollToPosition}) => (
  <ul style={[styles.ulStyle]}>
  {
    Object.keys(tabs).map((key)=>{
      const classStyleNames = 'tab '+ colorList[(tabs[key]%5)-1]
      if (key === 'Contact') {
        return (
          <li style={[styles.listStyle]} key={tabs[key]}>
            <a style={[styles.linkStyle]} onClick={(e)=>{e.preventDefault(); handleSelectSection(key); scrollToPosition(e, 1317) }}><h4 className={classStyleNames} style={[styles.tabStyle]} key={tabs[key]}>{key}</h4></a>
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
)
export default Radium(NavList);