import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  parallax: {
    minHeight: '500px',
    backgroundImage: "url('images/Front.jpg')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
};

const BannerView = ({ imgSrc }) => (
    <div style={[styles.parallax]}>
    </div>   
)

export default Radium(BannerView);