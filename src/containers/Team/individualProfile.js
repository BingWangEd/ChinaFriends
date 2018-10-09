import React, {Component} from 'react';
import Radium from 'radium';

const styles = {
  headerStyle: {
    height: '60px',
    position: '-webkit-sticky', 
    position: 'sticky',
    top: 0,
    background: 'white',
    zIndex: '9'
  }
};


const individualProfile = ({ name, title, description }) => (
  <div style={[]} >
    <h4>{name}</h4>
    <h5>{title}</h5>
    <p>{description}</p>
  </div>
)

export default Radium(individualProfile);