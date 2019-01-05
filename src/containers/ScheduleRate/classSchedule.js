import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import ClassScheduleTable from './classScheduleTable';
import SectionHeader from '../HelperComponents/sectionHeader';

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

class ClassSchedule extends Component {
  render(){
    const schedules = this.props.schedules
    return (
      <div style={[styles.center]}> 
        <SectionHeader header = "Schedule" />
      {
        schedules.map((eachClass, index)=>{
            return (<ClassScheduleTable 
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
)(Radium(ClassSchedule))