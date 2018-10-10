import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';

const styles = {
  div: {
    width: '60%',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.8s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    backgroundRepeat: 'no-repeat', 
    backgroundSize: '100%',
    backgroundPosition: 'center'
  },
  list: {
    listStyleType: 'none'
  },
  item: {
    color: 'white',
    fontSize: '25pt'
  },
  banner: {
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.3)',
    width: '250px',
    margin: 'auto'
  }
};


const colorList = Object.keys(colors)

const ProgramImageDisplay = ({ programImage, description }) => {
  const descriptionBox = description ? 
    (<div style={[styles.banner]}><ul style={[styles.list]}>
      {
        description.map((item, index)=>{
          return (
              <li key={index}>
                <p style={[styles.item]}>{item}</p>
              </li>
          )
      })}
    </ul></div>) : null
  return (
    <div style={[styles.div, styles.image, {backgroundImage: "url('"+ process.env.PUBLIC_URL+programImage +"')"}]}>
      {descriptionBox}
    </div>
  )
}
  


export default Radium(ProgramImageDisplay);