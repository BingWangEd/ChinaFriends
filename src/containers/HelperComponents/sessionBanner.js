import React from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './helpersStyleSheet.css';
import ContactButton from './contactButton'

const styles = {
  parallax: {
    minHeight: '280px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (min-width: 500px)': {
      minHeight: '350px'
    }
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
    fontSize: '40pt',
    height: '100%',
    padding: 0,
    display: "inline-block",
    '@media screen and (min-width: 500px)': {
      fontSize: '50pt'
    }
  }
};

const BannerView = ({ imgSrc, header }) => (
    <div style={[styles.parallax, { backgroundImage: "url('"+imgSrc+"')" }]}>
      <div style={[styles.banner]}>
        <h1 className="underline" style={[styles.header]}>{header}</h1>
        <ContactButton />
      </div>
    </div>   
)

export default Radium(BannerView);