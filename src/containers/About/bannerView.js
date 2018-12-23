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
    lineHeight: '50px',
    position: 'relative'
  },
  ChinaFriends: {
    fontSize: '33pt',
    color: 'white',
    fontFamily: "'Comfortaa', cursive"
  },
  imageStyle: {
    width: '130px',
    position: 'absolute',
    right: '-20px',
    top: '-15px'
  }
};

const BannerView = ({ imgSrc, chicagoBestImgSrc }) => (
    <div style={[styles.parallax]}>
      <div style={[styles.banner]}>
        <div><img style={[styles.imageStyle]} src={process.env.PUBLIC_URL+chicagoBestImgSrc} alt="Chicago best image" /></div>
        <h1>Fun</h1>
        <h1>Friends</h1>
        <h1>Fluency</h1>
        <h1 style={[styles.ChinaFriends]}>&#64;ChinaFriends</h1>
      </div>
    </div>   
)

export default Radium(BannerView);