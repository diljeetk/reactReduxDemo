import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PersonalInformation} from './personalInformation.js'
import {Education} from './education.js'
import {Experince} from './workExperince.js'
import {Social} from './social.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        renderPersonalinformation : true,
        renderEducation : false,
        renderWorkExperince : false,
        renderSocial : false,
    }
    this.goToStep2 = this.goToStep2.bind(this) 
    this.goToStep3 = this.goToStep3.bind(this) 
}  

  goToStep2(value) {
    this.setState({renderPersonalinformation: value, renderEducation : !value, renderSocial: value, renderWorkExperince:value})
  }
  goToStep3(value) {
    this.setState({renderPersonalinformation: value, renderEducation : value, renderSocial: value, renderWorkExperince:!value})
  }
  render() {
    return (
      <div className="App">
      {this.state.renderPersonalinformation ? <PersonalInformation goToStep2={this.goToStep2} /> : null}
      {this.state.renderEducation ? <Education  goToStep3={this.goToStep3}/> : null}
      {this.state.renderWorkExperince ? <Experince />  : null}
      {this.state.renderSocial ? <Social /> :null}
      </div>
    );
  }
}

export default App;
