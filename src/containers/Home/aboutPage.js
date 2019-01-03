import React, { Component } from 'react';
import Banner from './bannerContainer';
import Quote from './quoteContainer';
import FacebookIcon from '../facebookIcon';
import './aboutStyleSheet.css';


class About extends Component {
  render() {
    return (
      <div className='clearfix' id='About'>
        <Banner />
        <Quote />
      </div>
    );
  }
}

export default About;