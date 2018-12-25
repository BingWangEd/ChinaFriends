import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../helpers';
import './helpersStyleSheet.css';

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
    margin: 'auto',
    lineHeight: '50px',
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    maxWidth: '80%',
    display: 'inline-block'
  },
  header: {
    margin: 0,
    fontSize: '50pt',
    height: '100%',
    padding: 0,
    display: "inline-block"
  }
};

const BannerView = ({ imgSrc, header }) => (
    <div style={[styles.parallax, { backgroundImage: "url('"+imgSrc+"')" }]}>
      <div  style={[styles.banner]}>
        <h1 className="underline" style={[styles.header]}>{header}</h1>
      </div>
    </div>   
)

export default Radium(BannerView);