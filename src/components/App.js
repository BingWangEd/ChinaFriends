import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import { Route, Switch, withRouter } from 'react-router-dom';

import NavBar from '../containers/NavBar/navBarContainer';
import FacebookIcon from '../containers/HelperComponents/facebookIcon';
import Footer from '../containers/Footer/index';
import HomePage from '../containers/Home/homePage';
import CalendarContainer from '../containers/Calendar/calendarContainer';
import ContactsPage from '../containers/Contacts/contactsPage';
import ProgramDetails from '../containers/ProgramDetails/programDetailsContainer';
import ScheduleRateContainer from '../containers/ScheduleRate/scheduleRateContainer';
import TeamContainer from '../containers/Team/teamContainer';
import summerCampContainer from '../containers/SummerCamp/summerCampContainer';

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <div>
            <NavBar />
            <div>
              <FacebookIcon />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Programs" component={ProgramDetails} />
                <Route path="/ScheduleRate" component={ScheduleRateContainer} />
                <Route path="/Team" component={TeamContainer} />
                <Route path="/Calendar" component={CalendarContainer} />
                <Route path="/Contact" component={ContactsPage} />
                <Route path="/Summer2020" component={summerCampContainer} />
              </Switch>
            </div>
            <Footer />
          </div>  
          </StyleRoot>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default withRouter(connect(
  mapStateToProps
)(Radium(App)))