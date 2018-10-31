import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  parallax: {
    minHeight: '350px',
    backgroundImage: "url('images/Team.jpg')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  banner: {
    color: colors.yellow,
    padding: '0 40px 25px 40px',
    // background: 'rgba(225, 225, 225, 0.6)',
    width: '750px',
    margin: 'auto',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center'
  },
  header: {
    margin: 0,
    verticalAlign: 'center',
    fontSize: '50pt'
  }
};

const TeamBannerView = ({ imgSrc }) => (
    <div style={[styles.parallax]}>
      <div style={[styles.banner]}>
        <h1 style={[styles.header]}>Meet The Team That Helps Your Kids Grow</h1>
      </div>
    </div>   
)

export default Radium(TeamBannerView);