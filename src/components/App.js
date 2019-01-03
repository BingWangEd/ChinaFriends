import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import { Provider } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import NavBar from '../containers/NavBar/navBarTabsContainer';
import FacebookIcon from '../containers/facebookIcon';
import Footer from '../containers/Footer/index';
import HomePage from '../containers/Home/index';
import Calendar from '../containers/Calendar/index';
import ContactPage from '../containers/Contacts/index';
import ProgramDetail from '../containers/ProgramDetails/index';
import ScheduleRate from '../containers/ScheduleRate/index';
import Team from '../containers/Team/index';

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
                <Route path="/Programs" component={ProgramDetail} />
                <Route path="/ScheduleRate" component={ScheduleRate} />
                <Route path="/Team" component={Team} />
                <Route path="/Calendar" component={Calendar} />
                <Route path="/Contact" component={ContactPage} />
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