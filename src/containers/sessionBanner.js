import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../helpers';

const styles = {
  parallax: {
    minHeight: '350px',
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
    width: '750px',
    margin: 'auto',
    lineHeight: '50px',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  header: {
    margin: 0,
    fontSize: '50pt',
    height: '100%'
  }
};

const BannerView = ({ imgSrc, header }) => (
    <div style={[styles.parallax, { backgroundImage: "url('"+imgSrc+"')" }]}>
      <div style={[styles.banner]}>
        <h1 style={[styles.header]}>{header}</h1>
      </div>
    </div>   
)

export default Radium(BannerView);