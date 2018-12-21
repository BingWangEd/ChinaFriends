import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {colors} from '../../helpers';
import TableCell from './tableCell';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px'
  },
  tableStyle: {
    width: '100%'
  }
};

const colorList = Object.keys(colors)

class ScheduleTable extends Component {
  render(){
    const schedules = this.props.schedules
    return (
      <div style={[styles.center]}> 
      {
        schedules.map((eachClass, index)=>{
            const button = this.props.schedue_intro_display ? <button onClick = {() =>{this.props.removeScheduleIntroDisplay({index})}}>close</button> : <button onClick = {()=> {this.props.addScheduleIntroDisplay({index})}}>read more</button>
            return (
              <div key={index}>
                <h2>{eachClass["className"]}</h2>
                {button}
                <table>
                  <TableCell 
                    classSchedules = {eachClass["schedule"]} 
                    className = {eachClass["className"]}
                    classIntro = {eachClass["intro"]}
                  />
                </table>
              </div>
            )
        })
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
)(Radium(ScheduleTable))