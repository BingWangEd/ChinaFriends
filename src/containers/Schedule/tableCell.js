import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  cellStyle: {
    
    textAlign: 'left'
  },
  cellFont: {
    fontWeight: 'normal',
    color: colors.gray
  }
};

const colorList = Object.keys(colors)

const TableCell = ({ classSchedules, className, classIntro }) => (

  classSchedules.map((s)=>{
    return (
      <tr style={[styles.cellStyle]}>
        <th style={[styles.cellFont]}>{s["Day"]}</th>
        <th style={[styles.cellFont]}>{s["Time"]}</th>
      </tr>
    )
  })

)

export default Radium(TableCell);