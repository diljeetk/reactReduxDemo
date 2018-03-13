import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {persistEducationDetails} from './actions.js';
import { connect } from 'react-redux';

 class SocialComp extends Component {
    constructor(props){
        super(props)
        this.validateFormData =this.validateFormData.bind(this)
    }

    validateFormData(){
        if(this.refs.schoolName.value !=='' && this.refs.schoolMarks.value !=='' && this.refs.collegeName.value !=='' && this.refs.collegeCGPA.value !==''){
            let educationDetails = {
                schoolName : this.refs.schoolName.value,
                schoolMarks : this.refs.schoolMarks.value,
                collegeCGPA: this.refs.collegeCGPA.value,
                collegeName: this. refs.collegeName.value,
            }
            this.props.persistEducationDetail(educationDetails)
            this.props.goToStep3(false)

        } else {
            alert('All feilds are mandatory')
        }
        
    }
  render() {
    return (
      <div className="App">
      <h1> Enter Social Profile</h1>
      <form>
          LinkedIn URL : <input type='textbox' ref='linkedIn' required/>
          <br /><br />
          Facebook URL  : <input type='text'  ref='facebook' required/>
          <br /><br />
          Twitter URL : <input type='textbox' ref='twitter' required/>
          <br /><br />
      </form>
      <br/>
      <button>Previous</button>&nbsp;
      <button onClick={this.validateFormData}>Submit</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
    console.info(state)
    return {
      personalDetails : state.reactDemo.personalDetails,
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        persistEducationDetail: educationDetails => {
        dispatch(persistEducationDetails(educationDetails))
      }
    }
  }
  
   export const Social = connect(mapStateToProps,  mapDispatchToProps
  )(SocialComp)
  