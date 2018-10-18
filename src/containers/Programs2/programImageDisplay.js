import React, {Component} from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import './programsStyleSheet.css';

const styles = {
  wrapper: {
    width: '96%',
    minHeight: '400px',
    backgroundColor: colors.yellow,
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

const ProgramImageDisplay = ({ programImage, items, currNum }) => {
  const itemsBox =  
    (<ul style={[styles.list]}>
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
  const leftDistance = currNum ? (currNum*24.25+10)+'%' : '10%'
  return (
    <div style={[styles.wrapper]} className='clearfix'>
      <div style={[styles.arrowUp, {left: leftDistance}]}></div>
      <div className='clearfix' style={[styles.imageDiv, {backgroundImage: "url('"+ process.env.PUBLIC_URL+programImage +"')"}]}>
        
      </div>
      <div>
        {itemsBox}
      </div>
    </div>
  )
}
  


export default Radium(ProgramImageDisplay);