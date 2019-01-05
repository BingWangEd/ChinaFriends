import React from 'react';
import Radium from 'radium';
import './programStyle.css'
import {colors} from '../../helpers';
import SectionHeader from '../HelperComponents/sectionHeader';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '80px'
  },
  imageDiv: {
    width: '100%',
    overflow: 'hidden',
    minHeight: '250px',
    transition: 'all 0.8s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: '100%',
    backgroundPosition: 'center',
    '@media screen and (min-width: 700px)': {
      display: 'inline-block',
      float: 'left',
      width: '40%'
    },
    '@media screen and (min-width: 500px)': {
      minHeight: '420px'
    }
  },
  list: {
    width: '100%',
    listStyleType: 'none',
    paddingLeft: 0,
    transition: 'all 0.8s',
    '@media screen and (min-width: 700px)': {
      float: 'left',
      display: 'inline-block',
      width: '50%',
      marginLeft: '4%'
    }
  },
  item: {
    color: colors.gray
  },
  title: {
    fontFamily: "'Comfortaa', cursive"
  }
};

const ProgramDisplay = ({ programImage, items, title }) => {
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
  return (
    <div style={[styles.center]} className='clearfix'>
      <SectionHeader header = {title} />
      <div>
        <div className='clearfix' style={[styles.imageDiv, {backgroundImage: "url('"+ process.env.PUBLIC_URL+programImage +"')"}]}>
        </div>
        <div>
          {itemsBox}
        </div>
      </div>
    </div>
  )
}

export default Radium(ProgramDisplay);