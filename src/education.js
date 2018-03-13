import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {persistEducationDetails} from './actions.js';
import { connect } from 'react-redux';

 class EducationComp extends Component {
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
      <h1> Enter Education Details</h1>
      <form>
          12th School Name : <input type='textbox' ref='schoolName' required/>
          <br /><br />
          12th School Marks(in %) : <input type='number' min='0' max='100' ref='schoolMarks' required/>
          <br /><br />
          College Name : <input type='textbox' ref='collegeName' required/>
          <br /><br />
          College CGPA(0-10) : <input type='textbox' ref='collegeCGPA' required/>
          <br /><br />
      </form>
      <br/>
      <button>Previous</button>&nbsp;
      <button onClick={this.validateFormData}>Next</button>
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
  
   export const Education = connect(mapStateToProps,  mapDispatchToProps
  )(EducationComp)
  