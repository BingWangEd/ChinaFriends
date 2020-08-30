import React, {Component} from 'react';
import {selectSection} from '../../actions/index';
import {connect} from 'react-redux';
import Radium from 'radium';
import {colors} from '../../helpers';
import './helpersStyleSheet.css';
import {NavLink} from 'react-router-dom';

const styles = {
  button: {
    borderRadius: '4px',
    border: 'none',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: colors.red,
    fontFamily: "'Comfortaa', cursive",
    cursor: 'pointer',
    display: 'block',
    fontSize: '16px',
    margin: '10px auto 0 auto',
    width: '230px',
    '@media screen and (min-width: 600px)': {
      margin: '10px 0 0 0'
    },
    ':hover': {
      backgroundColor: 'white',
      color: colors.red
    }
  },

};

class ContactButton extends Component{
  render(){
    return (
      <NavLink to='/Contact' style={{textDecoration: 'none'}}>
        <button
          onClick={(e)=>{
            e.preventDefault();
            this.props.selectSection("Contact");}}
          style={[styles.button]}
        >Contact Us to Sign Up</button>
      </NavLink>
    )
  }
} 

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps,
  {selectSection}
)(Radium(ContactButton))