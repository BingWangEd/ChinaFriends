import React, {Component} from 'react';
import Radium from 'radium';
import './programStyle.css'
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px'
  },
  wrapper: {
    width: '96%',
    minHeight: '400px',
    padding: '2%',
    position: 'relative',
    top: '40px',
    transition: 'all 0.8s'
  },
  imageDiv: {
    width: '60%',
    overflow: 'hidden',
    minHeight: '420px',
    transition: 'all 0.8s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'inline-block',
    float: 'left',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: '100%',
    backgroundPosition: 'center'
  },
  list: {
    width: '33%',
    listStyleType: 'none',
    marginLeft: '1%',
    float: 'left',
    display: 'inline-block'
  },
  item: {
    color: colors.gray
  },
  arrowUp: {
    width: 0, 
    height: 0, 
    borderLeft: '40px solid transparent',
    borderRight: '40px solid transparent',
    borderBottom: '40px solid '+colors.yellow,
    position: 'absolute',
    top: '-40px'
  },
  title: {
    fontFamily: "'Comfortaa', cursive"
  }
};

const colorList = Object.keys(colors)

const ProgramDisplay = ({ programImage, items }) => {
  const itemsBox =  
    (<ul style={[styles.list, styles.center]}>
      {
        Object.keys(items).map((item, index)=>{
          return (
              <li key={index}>
                <h2 style={[styles.title]}>{item}</h2>
                <p style={[styles.item]}>{items[item]}</p>
              </li>
          )
      })}
    </ul>)
  return (
    <div style={[styles.wrapper]} className='clearfix'>
      <div className='clearfix' style={[styles.imageDiv, {backgroundImage: "url('"+ process.env.PUBLIC_URL+programImage +"')"}]}>
      </div>
      <div>
        {itemsBox}
      </div>
    </div>
  )
}

export default Radium(ProgramDisplay);