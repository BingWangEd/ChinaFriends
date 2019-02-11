import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import ClassScheduleTableCell from './classScheduleTableCell';
import {colors} from '../../helpers';

const styles = {
  classSectionStyle: {
    margin: "30px 0"
  },
  classHeaderStyle: {
    display: 'inline',
    paddingRight: "15px",
    fontFamily: "'Comfortaa', cursive"
  },
  classTitleStyle: {
    marginBottom: "15px"
  },
  classIntroStyle: {
    color: colors.gray
  },
  transitionStyle: {
    transition: "all 5s ease-out"
  },
  buttonStyle: {
    border: "none",
    color: colors.blue,
    cursor: 'pointer',
    backgroundColor: 'white'
  }
};

let introOpen = false

class ClassScheduleTable extends Component{
  render(){
    let toggle = (e) => {
      e.preventDefault();
      introOpen = !introOpen;
      this.forceUpdate();
    }

    let intro = introOpen ? this.props.classIntro : null;
    
    let button = introOpen ? <button style={[styles.buttonStyle]} onClick = {toggle}>close</button> : <button style={[styles.buttonStyle]} onClick = {toggle}>read more about the class</button>
    
    if (this.props.classIntro.length===0){
      button = null;
    }
    
    return (
      <div style={[styles.classSectionStyle]}>
        <div style={[styles.classTitleStyle]}><h2 style={[styles.classHeaderStyle]}>{this.props.className}</h2>{button}</div>
        <div><p style={[styles.classIntroStyle]}>{intro}</p></div>
        <table>
          <ClassScheduleTableCell 
            classSchedules = {this.props.classSchedules}
          />
        </table>
      </div>
    )
  }
  
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(ClassScheduleTable))