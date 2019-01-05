import React from 'react';
import Radium from 'radium';
import {colors} from '../../helpers';
import SectionHeader from '../HelperComponents/sectionHeader';

const styles = {
  center: {
    margin: 'auto',
    width: '85%',
    paddingTop: '60px'
  },
  introStyle: {
    color: colors.gray
  },
  tableCellStyle: {
    width: "100px"
  },
  noteStyle: {
    fontWeight: 'lighter',
    fontSize: '0.8em',
    color: colors.gray
  },
  sectionStyle: {
    marginBottom: '30px'
  },
  headerStyle: {
    fontFamily: "'Comfortaa', cursive"
  },
};

const ClassRates = ({ rates }) => (
  <div style={[styles.center]}>
    <SectionHeader header = "Class Rates" />
    <div style={[styles.sectionStyle]}>
      <h2 style={[styles.headerStyle]}>Children</h2>
      <p style={[styles.introStyle]}>{rates.Children.Length}; {rates.Children.Intro}</p>
      <table>
        <tr> 
          <th style={[styles.tableCellStyle]}></th>
          <th style={[styles.tableCellStyle]}>50 min</th>
          <th style={[styles.tableCellStyle]}>80 min</th>
          <th style={[styles.tableCellStyle]}>Playground</th>
        </tr>
        <tr>
          <td>Once/Week</td>
          <td>$570</td>
          <td>$715</td>
          <td>$1,260</td>
        </tr>
        <tr>
          <td>Twice/Week</td>
          <td>$1,028</td>
          <td>$1,240</td>
          <td>$2,142 </td>
        </tr>
      </table>
    </div>
    <div style={[styles.sectionStyle]}>
      <h2 style={[styles.headerStyle]}>Adults</h2>
      <p style={[styles.introStyle]}>{rates.Adults.Length}; {rates.Adults.Intro}</p>
      <table>
        <tr> 
          <th style={[{ width: "400px"}]}>Normal Rate</th>
          <td>$760</td>
        </tr>
        <tr>
          <th>Special Rate<br/><span style={[styles.noteStyle]}>for those with children currently taking classes at ChinaFriends</span></th>
          <td>$515</td>
        </tr>
      </table>
    </div>
    <div style={[styles.sectionStyle]}>
      <h2 style={[styles.headerStyle]}>Private</h2>
      <p style={[styles.introStyle]}>{rates.Private.Intro}</p>
    </div>
    <div style={[styles.sectionStyle]}>
      <h2 style={[styles.headerStyle]}>Registration</h2>
      <table>
        <tr> 
          <th style={[{ width: "400px"}]}>One-Time New Family Registration</th>
          <td>$30</td>
        </tr>
        <tr>
          <th>Sibling Discount<br/><span style={[styles.noteStyle]}>credit for each additional child</span></th>
          <td>$30</td>
        </tr>
      </table>
    </div>
    <div style={[styles.sectionStyle]}>
      <h2 style={[styles.headerStyle]}>Two Installment Payment Plan</h2>
      <p style={[styles.introStyle]}>The two-installment payment plan is only offered if paying by credit card; a pre-dated charge slip will be kept on file and charged on the mid-term date. The payments option is only offered for 18-week semester sessions.  Please contact Zhaoyi at zhaoyi@chinafriends.org if you would like to set up a payment plan.</p>
    </div>
  </div>
)

export default Radium(ClassRates);