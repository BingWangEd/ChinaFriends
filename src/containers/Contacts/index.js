import React, { Component } from 'react';
import {connect} from 'react-redux'
import ContactForm from './contactForm';
import {contacts} from '../../helpers';

class Contacts extends Component {
  handleScrollToPosition = (e, position) => {
    e.preventDefault();
    window.scrollTo({top: position, left: 0, behavior: 'smooth'});
  }

  componentDidMount(){
    if (this.props.selected_section === 'Contact'){
      window.scrollTo({top: '1317', left: 0, behavior: 'smooth'});
    }
  }

  render() {
    return (
      <div className='contact'><ContactForm contactsInfo = {contacts} /></div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Contacts);