import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../containers/NavBar/navBarTabsContainer';
import MainContent from '../containers/home';
import FacebookIcon from '../containers/facebookIcon';
import Footer from '../containers/Footer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        
        <NavBar />
        <FacebookIcon />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(App)
