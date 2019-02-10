import React from 'react';
import Radium from 'radium';

const styles = {
  cellStyle: {
    textAlign: 'left'
  },
  cellFont: {
    fontWeight: 'normal'
  }
};

const ClassScheduleTableCell = ({ classSchedules }) => (

  classSchedules.map((s, index)=>{
    return (
        <tr key={index} style={[styles.cellStyle]}>
          <th style={[styles.cellFont]}>{s["Day"]}</th>
          <th style={[styles.cellFont]}>{s["Time"]}</th>
        </tr>
    )
  })

)

export default Radium(ClassScheduleTableCell);