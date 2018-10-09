import React, { Component } from 'react';
import Banner from './bannerContainer';
import Quote from './quoteContainer';
import './aboutStyleSheet.css';

class About extends Component {
  render() {
    return (
      <div className='clearfix'>
        <Banner />
        <Quote />
      </div>
    );
  }
}

export default About;