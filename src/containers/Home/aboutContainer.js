import React, { Component } from 'react';
import BannerContainer from './bannerContainer';
import QuoteContainer from './quoteContainer';
import './aboutStyleSheet.css';


class AboutContainer extends Component {
  render() {
    return (
      <div className='clearfix' id='About'>
        <BannerContainer />
        <QuoteContainer />
      </div>
    );
  }
}

export default AboutContainer;