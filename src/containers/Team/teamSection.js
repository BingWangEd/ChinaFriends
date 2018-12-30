import React, {Component} from 'react';
import Radium from 'radium';
import './teamStyle.css'
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px'
  },
  container:{
    '@media screen and (min-width: 500px)': {
      width: '50%',
      float: 'left'
    },
    '@media screen and (min-width: 900px)': {
      width: '33%',
      float: 'left'
    }
  },
  column: {
    padding: '20px',
    minHeight: '600px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 1px 2px' + colors.gray,
    '@media screen and (min-width: 500px)': {
      minHeight: '650px'
    }
  },
  image: {
    width: '100%'
  },
  nameStyle: {
    color: colors.blue,
    fontFamily: "'Comfortaa', cursive"
  },
  titleStyle: {
    color: colors.gray,
    fontStyle: 'italic'
  },
  descriptionStyle: {
    color: colors.gray,
    textAlign: 'left'
  }
};


const TeamSection = ({ team }) => (
  <div style={[styles.center]} className='row'>
    {
      team.map((member, index)=>{
        const name = member.FirstName + " " + member.LastName
        const title = member.Title
        const description = member.Description
        const imgSrc = "Images/TeamPhotos/" + member.FirstName + member.LastName + ".jpg"
        return (
          <div style={[styles.container]}>
            <div key={index} style={[styles.column]}>
              <img style={[styles.image]} src={process.env.PUBLIC_URL+imgSrc} alt="person image" />
              <h1 style={[styles.nameStyle]}>{name}</h1>
              <h3 style={[styles.titleStyle]}>{title}</h3>
              <p style={[styles.descriptionStyle]}>{description}</p>
            </div>
          </div>
        )
      })
    }
  </div>
)

export default Radium(TeamSection);