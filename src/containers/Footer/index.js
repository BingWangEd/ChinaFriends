import React, { Component } from 'react';
import {connect} from 'react-redux'
import {contacts} from '../../helpers';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  leftSectionStyle: {
    float: 'left',
    display: 'inline-block',
    textAlign: 'left',
    color: 'white',
    marginLeft: '2.5%'
  },
  rightSectionStyle: {
    float: 'right',
    display: 'inline-block',
    textAlign: 'right',
    marginRight: '2.5%',
    color: 'white'
  },
  center: {
    margin: 'auto',
    height: '50px',
    backgroundColor: colors.gray
  }
};

class Footer extends Component {
  render() {
    return (
      <section style={[styles.center]}>
        <div style={[styles.leftSectionStyle]}><p>Empowering students with new language skills</p></div>
        <div style={[styles.rightSectionStyle]}><p>| Copyright © 2004-2019 ChinaFriends Inc.</p></div>
      </section>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Radium(Footer));