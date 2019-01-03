import React, { Component } from 'react';
import {connect} from 'react-redux'
import ContactForm from './contactForm';
import {contacts} from '../../helpers';

class Contacts extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  scrollToMyRef = () => {    
    window.scrollTo({
      top:this.myRef.current.offsetTop, 
      behavior: "smooth"  
    })
  }
  scrollToTop = () => {
    console.log('scroll to top')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  componentDidMount(){

    if (this.myRef.current){
      this.scrollToMyRef();
    } else {
      this.scrollToTop();
    }
  }

  componentWillUnmount(){
    this.scrollToTop();
  }

  render() {
    if (this.props.selected_section === 'Contact'){
      return (
        <div ref={this.myRef} className='contact'><ContactForm contactsInfo = {contacts} /></div>
      );
    } else {
      return (
        <div className='contact'><ContactForm contactsInfo = {contacts} /></div>
      );
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Contacts);