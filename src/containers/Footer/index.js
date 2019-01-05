import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  leftSectionStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "'Comfortaa', cursive",
    margin: 0,
    paddingTop: '10px',
    '@media screen and (min-width: 850px)': {
      marginLeft: '2.5%',
      float: 'left',
      display: 'inline-block',
      textAlign: 'left'
    }
  },
  rightSectionStyle: {
    color: 'white',
    textAlign: 'center',
    paddingTop: '10px',
    '@media screen and (min-width: 900px)': {
      float: 'right',
      display: 'inline-block',
      textAlign: 'right',
      marginRight: '2.5%'
    }
  },
  center: {
    margin: 'auto',
    backgroundColor: colors.gray,
    height: '90px',
    '@media screen and (min-width: 490px)': {
      height: '70px'
    },
    '@media screen and (min-width: 900px)': {
      height: '50px'
    }
  },
  removeMargin: {
    margin: 0
  }
};

class Footer extends Component {
  render() {
    return (
      <section>
        <div style={[styles.center]}>
          <div style={[styles.leftSectionStyle]}><p style={[styles.removeMargin]}>Empowering students with new language skills</p></div>
          <div style={[styles.rightSectionStyle]}><p style={[styles.removeMargin]}>Site icons by <a href="https://icons8.com/color-icons">Icons8</a> | Copyright © 2004-2019 ChinaFriends Inc.</p></div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Radium(Footer));