import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import MainContent from '../containers/home';
import FacebookIcon from '../containers/facebookIcon';
import Footer from '../containers/Footer/index';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div>
          <NavBar />
          <FacebookIcon />
          <MainContent />
          <Footer />
        </div>
      </StyleRoot>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(App))
