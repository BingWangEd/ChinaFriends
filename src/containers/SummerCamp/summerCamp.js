import React from 'react';
import Radium from 'radium';
import SectionHeader from '../HelperComponents/sectionHeader';
import {colors} from '../../helpers';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px',
    marginBottom: '100px'
  },
  text: {
    margin: '20px 20px 20px 0',
    textAlign: 'left',
    color: colors.gray,
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
    color: 'black'
  },
};


const SummerCamp = () => (
  <div style={[styles.center]}> 
    <SectionHeader header = "Summer 2020" />
    <h2 style={[styles.title]}>Check out one of the 'e-tours' in Beijing</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/25Pg64WSa8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe>
    <h2 style={[styles.title]}>Description</h2>
    <div style={[styles.text]}>
      Great news!  We are very proud to bring you this historic announcement!<br/><br/>

      During this challenging time, in order to prioritize both safety and education, ChinaFriends has partnered with top-level native Chinese Mandarin teachers to provide an authentic video tour of the most famous sites in China, including the Great Wall of China, The Forbidden city, Summer palace in Beijing and the Terracotta Army in Xi’an etc. <strong><i>Each part of the interactive video experience is hosted and/or recorded live</i></strong> by the top-rated professional Chinese guides, specifically for our program!<br/><br/>

      Additionally, our Chinese team has gone out and recorded authentic video footage specifically for your children’s education! What does this mean for you?  Now, you can join your children to see the most famous places in China this summer, very affordably and from the safety and convenience of your own home (no masks required)!<br/><br/>

      Each session will be hosted by live two top-rated teachers!  One will be the guide and host from actual mainland China!  The other will be one of our elite and trusted teachers in the US.<br/><br/>

      We are very excited and proud to present this truly unique and revolutionary program!<br/>
    </div>
    <h2 style={[styles.title]}>Session Dates</h2>
    <div style={[styles.text]}>
      Week Jun 22 – Beijing<br/><br/>
      Week Jun 29 – Xi’an<br/><br/>
      Week Jul 6 – Beijing<br/><br/>
      Week Jul 13 – Xi’an<br/><br/>
      Week Jul 20 – Beijing<br/><br/>
      Week Jul 27 – Xi’an<br/><br/>
      Week Aug 3 – Beijing<br/><br/>
      Week Aug 10 – Xi’an<br/><br/>
      Week Aug 17 – Beijing<br/><br/>
      Week Aug 24 – Xi’an<br/><br/>
    </div>
    <h2 style={[styles.title]}>Session time:</h2>
    <div style={[styles.text]}>
      Monday to Friday 9-11am
    </div>
    <h2 style={[styles.title]}>Age Group:</h2>
    <div style={[styles.text]}>
      3 years old and above<br/><br/>
      We will group students into close age and Chinese language abilities. One registration per family. All the family members can participate!
    </div>
    <h2 style={[styles.title]}>Price:</h2>
    <div style={[styles.text]}>
      $325 per session
    </div>
    <h2 style={[styles.title]}>E-camp Registration form:</h2>
    <div style={[styles.text]}>
      <a href="https://docs.google.com/forms/d/1ALG0quYTk5RFLnf338y1ULUhXYNNvl3kT0N3Q7TnDNw/edit">Click to Fill Out the Form</a>
    </div>
  </div>
)

export default Radium(SummerCamp);