import React from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import ContactButton from '../HelperComponents/contactButton';
import {NavLink} from 'react-router-dom';

const styles = {
  parallax: {
    minHeight: '620px',
    backgroundImage: "url('images/Front.jpg')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 430px)': {
      minHeight: '420px'
    }
  },
  banner: {
    color: colors.yellow,
    padding: '0 40px 25px 40px',
    background: 'rgba(0, 0, 0, 0.3)',
    width: '430px',
    fontSize: '25pt',
    margin: 'auto',
    height: '510px',
    lineHeight: '50px',
    position: 'relative',
    '@media screen and (max-width: 520px)': {
        width: '70%'
      },
    '@media screen and (max-width: 430px)': {
        height: '300px'
      }
  },
  ChinaFriends: {
    fontSize: '33pt',
    color: 'white',
    fontFamily: "'Comfortaa', cursive",
    '@media screen and (max-width: 520px)': {
        fontSize: '1.3em'
      },
    '@media screen and (max-width: 430px)': {
        display: 'none'
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
      },
    '@media screen and (max-width: 400px)': {
        fontSize: '1.5em'
      }
  },
  disappear: {
    '@media screen and (max-width: 460px)': {
      display: 'none'
    }
  },
  ChineseStyle: {
    fontFamily: "LiSu",
    fontSize: '0.7em',
    '@media screen and (max-width: 520px)': {
      display: 'none'
    }
  }
};

const Banner = ({ imgSrc, chicagoBestImgSrc }) => (
    <div style={[styles.parallax]}>
      <div style={[styles.banner]}>
        <div><NavLink exact to='/Summer2020'><img style={[styles.imageStyle]} src={process.env.PUBLIC_URL+chicagoBestImgSrc} alt="Summer Camp" /></NavLink></div>
        <h1 style={[styles.wordStyle]}>Fun <span style={[styles.ChineseStyle]}>有乐趣</span></h1>
        <h1 style={[styles.wordStyle]}>Friends <span style={[styles.ChineseStyle]}>有朋友</span></h1>
        <h1 style={[styles.wordStyle]}>Fluency <span style={[styles.ChineseStyle]}>有的说</span></h1>
        <h1 style={[styles.ChinaFriends]}><span style={[styles.disappear]}>&#64;</span>ChinaFriends</h1>
        <ContactButton style={[styles.buttonStyle]} />
      </div>
    </div>   
)

export default Radium(Banner);