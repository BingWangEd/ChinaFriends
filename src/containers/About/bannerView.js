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
    position: 'relative',
    '@media screen and (max-width: 520px)': {
        width: '70%'
      }
  },
  ChinaFriends: {
    fontSize: '33pt',
    color: 'white',
    fontFamily: "'Comfortaa', cursive",
    '@media screen and (max-width: 520px)': {
        fontSize: '1.3em'
      }
  },
  imageStyle: {
    width: '130px',
    position: 'absolute',
    right: '-20px',
    top: '-15px',
    '@media screen and (max-width: 480px)': {
        width: '90px'
      },
    '@media screen and (max-width: 350px)': {
        display: 'none'
      }
  },
  wordStyle: {
    '@media screen and (max-width: 520px)': {
        fontSize: '2em'
      }
  },
  atStyle: {
    '@media screen and (max-width: 460px)': {
      display: 'none'
    }
  }
};

const BannerView = ({ imgSrc, chicagoBestImgSrc }) => (
    <div style={[styles.parallax]}>
      <div style={[styles.banner]}>
        <div><img style={[styles.imageStyle]} src={process.env.PUBLIC_URL+chicagoBestImgSrc} alt="Chicago best image" /></div>
        <h1 style={[styles.wordStyle]}>Fun</h1>
        <h1 style={[styles.wordStyle]}>Friends</h1>
        <h1 style={[styles.wordStyle]}>Fluency</h1>
        <h1 style={[styles.ChinaFriends]}><span style={[styles.atStyle]}>&#64;</span>ChinaFriends</h1>
      </div>
    </div>   
)

export default Radium(BannerView);