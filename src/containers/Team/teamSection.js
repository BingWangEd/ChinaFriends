import React, {Component} from 'react';
import Radium from 'radium';
import individualProfile from './individualProfile';
import './teamStyle.css'
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: 'auto',
    width: '85%'
  },
  container:{
    width: '33.33%',
    float: 'left'
  },
  column: {
    padding: '20px',
    minHeight: '600px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 1px 2px' + colors.gray
  },
  image: {
    width: '100%'
  },
  nameStyle: {
    color: colors.red
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
              <h2 style={[styles.nameStyle]}>{name}</h2>
              <h5 style={[styles.titleStyle]}>{title}</h5>
              <p style={[styles.descriptionStyle]}>{description}</p>
            </div>
          </div>
        )
      })
    }
  </div>
)

export default Radium(TeamSection);