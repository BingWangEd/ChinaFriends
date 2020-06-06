import React from 'react';
import Radium from 'radium';
import SectionHeader from '../HelperComponents/sectionHeader';

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


const Calendar = ({ holidays, quarters }) => (
  <div style={[styles.center]}>
    <div>
      <SectionHeader header = "Quaters" />
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
      <SectionHeader header = "Calendar" />
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

export default Radium(Calendar);