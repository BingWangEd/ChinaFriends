import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import HeaderDeco from '../headerDeco';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px'
  },
  tableHeaderStyle: {
    textAlign: 'left',
    paddingRight: '20px'
  },
  tableStyle: {
    margin: '30px 0 60px 0'
  }
};


const CalendarSection = ({ holidays, quarters }) => (
  <div style={[styles.center]}>
    <div>
      <HeaderDeco header = "Quater Terms" />
      <table style={[styles.tableStyle]}>
        {Object.keys(quarters).map((key)=>{
          return (
            <tr>
              <th style={[styles.tableHeaderStyle]}>{key}</th>
              <td>{quarters[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
    <div>
      <HeaderDeco header = "Calendar" />
      <table style={[styles.tableStyle]}>
        {Object.keys(holidays).map((key)=>{
          return (
            <tr>
              <th style={[styles.tableHeaderStyle]}>{key}</th>
              <td>{holidays[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
  </div>
)

export default Radium(CalendarSection);