import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {colors} from '../../helpers';
import ClassSchedules from './classSchedules';
import HeaderView from '../headerDeco';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '80px'
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
        <HeaderView header = "Schedule" />
      {
        schedules.map((eachClass, index)=>{
            return (<ClassSchedules 
              className = {eachClass["className"]}
              classIntro = {eachClass["intro"]}
              classSchedules = {eachClass["schedule"]}
            />)
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