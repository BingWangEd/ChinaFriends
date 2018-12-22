import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import TableCell from './tableCell';
import {colors} from '../../helpers';

const styles = {
  classSectionStyle: {
    margin: "30px 0"
  },
  classHeaderStyle: {
    display: 'inline',
    paddingRight: "15px"
  },
  classTitleStyle: {
    marginBottom: "15px"
  },
  classIntroStyle: {
    color: colors.gray
  }
};

let introOpen = false

class ClassSchedules extends Component{
  render(){
    let toggle = (e) => {
      e.preventDefault;
      introOpen = !introOpen;
      this.forceUpdate();
    }
    let button = introOpen ? <button onClick = {toggle}>close</button> : <button onClick = {toggle}>read more about the class</button>
    let intro = introOpen ? <p style={[styles.classIntroStyle]}>{this.props.classIntro}</p> : null
    return (
      <div style={[styles.classSectionStyle]}>
        <div style={[styles.classTitleStyle]}><h2 style={[styles.classHeaderStyle]}>{this.props.className}</h2>{button}</div>
        {intro}
        <table>
          <TableCell 
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
)(Radium(ClassSchedules))