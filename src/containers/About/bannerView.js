import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  parallax: {
    minHeight: '500px',
    backgroundImage: "url('images/Front.jpg')",
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
    background: 'rgba(0, 0, 0, 0.3)',
    width: '350px',
    fontSize: '25pt',
    margin: 'auto',
    height: '380px',
    lineHeight: '50px'
  },
  ChinaFriends: {
    fontSize: '33pt',
    color: 'white',
    fontFamily: "'Comfortaa', cursive"
  }
};

const BannerView = ({ imgSrc }) => (
    <div style={[styles.parallax]}>
      <div style={[styles.banner]}>
        <h1>Fun</h1>
        <h1>Friends</h1>
        <h1>Fluency</h1>
        <h1 style={[styles.ChinaFriends]}>&#64;ChinaFriends</h1>
      </div>
    </div>   
)

export default Radium(BannerView);