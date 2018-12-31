import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unselectProgram} from '../../actions/index';
import './programStyle.css'
import {colors} from '../../helpers';
import ProgramDisplay from './programDisplay';

class ProgramSection extends Component {
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

  componentDidMount(){
    if (this.myRef.current){
      this.scrollToMyRef();
    }
  }

  componentWillUnmount(){
    if (this.props.selected_program){
      this.props.unselectProgram();
    }
    window.scrollTo({
      top: 0  
    })
  }

  render(){
    return (
      <div className='row'>
      {
        Object.keys(this.props.programs).map((program, index)=>{
          if (this.props.selected_program === program){
            return (
              <div key={index} ref={this.myRef}>
                <ProgramDisplay programImage={this.props.programs[program].imgSrc} items={this.props.programs[program].items} title={program}/>
              </div>
            )
          } else {
            return (
              <div key={index}>
                <ProgramDisplay programImage={this.props.programs[program].imgSrc} items={this.props.programs[program].items} title={program}/>
              </div>
            )
          }
        })
      }
      </div>
    )
  }s
}

function mapStateToProps(state){
  return state
}
 
export default connect(
  mapStateToProps,
  {unselectProgram}
)(ProgramSection);