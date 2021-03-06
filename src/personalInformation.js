import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {persistPersonalDetails} from './actions.js';
import { connect } from 'react-redux'

 class PersonalInformationComp extends Component {
    constructor(props){
      super(props)
      this.state = {
        sex :'',
      }
      this.validateData = this.validateData.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
      this.setState({sex: event.target.value})
    }
    validateData(){
      if(this.refs.firstName.value !=='' && this.state.sex !=='' && this.refs.lastName.value !== '' && this.refs.dateOfBirth.value !== '' && this.refs.height.value !=='' && this.refs.weight.value !=='' ){
        
        let userDetails = {
          firstName : this.refs.firstName.value,
          lastName : this.refs.lastName.value,
          dateOfBirth : this.refs.dateOfBirth.value,
          height: this.refs.height.value,
          weight: this.refs.weight.value,
          gender: this.state.sex,
        }
        this.props.persistPersonalDetails(userDetails)
        this.props.goToStep2(false)
    

      } else {
        alert('All Feilds are mandatory')
      }

    }

  
  render() {
    return (
      <div className="App">
      <h1> Enter Personal Details </h1>
        <form>
          First name : <input type='text' ref='firstName' required/>
          <br/>
          <br/>
          Last name : <input type='text' ref='lastName' required/>
          <br/>
          <br/>
          Date Of Birth : <input type='date' ref='dateOfBirth' required/>
          <br/>
          <br/>
          Gender : <input type='radio' name='gender' value='male' ref='male' onChange={this.handleChange}/>Male &nbsp; 
          <input type='radio' name='gender' value='female' ref='female' onChange={this.handleChange}/>Female
          <br/>
          <br/>
          Height(in inches) : <select ref='height'>
            <option value='42'>42</option>
            <option value='43'>43</option>
            <option value='44'>44</option>
            <option value='45'>45</option>
            <option value='46'>46</option>
            <option value='47'>47</option>
            <option value='48'>48</option>
            <option value='49'>49</option>
            <option value='50'>50</option>
            <option value='51'>51</option>
            <option value='52'>52</option>
            <option value='53'>53</option>
            <option value='53'>54</option>
            <option value='55'>55</option>
            <option value='56'>56</option>
            <option value='57'>57</option>
            <option value='58'>58</option>
            <option value='59'>59</option>
            <option value='60'>60</option>
            <option value='61'>61</option>
            <option value='62'>62</option>
            <option value='63'>63</option>
            <option value='64'>64</option>
            <option value='65'>65</option>
            <option value='66'>66</option>
            <option value='67'>67</option>
            <option value='68'>68</option>
            <option value='69'>69</option>
            <option value='70'>70</option>
            <option value='71'>71</option>
            <option value='72'>72</option>
            <option value='73'>73</option>
            <option value='74'>74</option>
            <option value='75'>75</option>
            <option value='76'>76</option>
            <option value='77'>77</option>
            <option value='78'>78</option>
            <option value='79'>79</option>
            <option value='80'>80</option>
            <option value='81'>81</option>
            <option value='82'>82</option>
            <option value='83'>83</option>
            <option value='84'>84</option>
            <option value='85'>85</option>
            <option value='86'>86</option>
            <option value='87'>87</option>
            <option value='88'>88</option>
            <option value='89'>89</option>
            <option value='90'>90</option>
            <option value='91'>91</option>
            <option value='92'>92</option>
            <option value='93'>93</option>
            <option value='94'>94</option>
            <option value='95'>95</option>
            <option value='96'>96</option>
          </select>
          <br/>
          <br/>
          Weight(in Kgs) : <select ref='weight'>
            <option value='35'>35</option>
            <option value='36'>36</option>
            <option value='37'>37</option>
            <option value='38'>38</option>
            <option value='39'>39</option>
            <option value='40'>40</option>
            <option value='41'>41</option>
            <option value='42'>42</option>
            <option value='43'>43</option>
            <option value='44'>44</option>
            <option value='45'>45</option>
            <option value='46'>46</option>
            <option value='47'>47</option>
            <option value='48'>48</option>
            <option value='49'>49</option>
            <option value='50'>50</option>
            <option value='51'>51</option>
            <option value='52'>52</option>
            <option value='53'>53</option>
            <option value='53'>54</option>
            <option value='55'>55</option>
            <option value='56'>56</option>
            <option value='57'>57</option>
            <option value='58'>58</option>
            <option value='59'>59</option>
            <option value='60'>60</option>
            <option value='61'>61</option>
            <option value='62'>62</option>
            <option value='63'>63</option>
            <option value='64'>64</option>
            <option value='65'>65</option>
            <option value='66'>66</option>
            <option value='67'>67</option>
            <option value='68'>68</option>
            <option value='69'>69</option>
            <option value='70'>70</option>
            <option value='71'>71</option>
            <option value='72'>72</option>
            <option value='73'>73</option>
            <option value='74'>74</option>
            <option value='75'>75</option>
            <option value='76'>76</option>
            <option value='77'>77</option>
            <option value='78'>78</option>
            <option value='79'>79</option>
            <option value='80'>80</option>
            <option value='81'>81</option>
            <option value='82'>82</option>
            <option value='83'>83</option>
            <option value='84'>84</option>
            <option value='85'>85</option>
            <option value='86'>86</option>
            <option value='87'>87</option>
            <option value='88'>88</option>
            <option value='89'>89</option>
            <option value='90'>90</option>
            <option value='91'>91</option>
            <option value='92'>92</option>
            <option value='93'>93</option>
            <option value='94'>94</option>
            <option value='95'>95</option>
            <option value='96'>96</option>
            <option value='97'>97</option>
            <option value='98'>98</option>
            <option value='99'>99</option>
            <option value='100'>100</option>
            <option value='101'>101</option>
            <option value='102'>102</option>
            <option value='103'>103</option>
            <option value='104'>104</option>
            <option value='105'>105</option>
            <option value='106'>106</option>
            <option value='107'>107</option>
            <option value='108'>108</option>
            <option value='109'>109</option>
            <option value='110'>110</option>
            <option value='111'>111</option>
            <option value='112'>112</option>
            <option value='113'>113</option>
            <option value='114'>114</option>
            <option value='115'>115</option>
            <option value='116'>116</option>
            <option value='117'>117</option>
            <option value='118'>118</option>
            <option value='119'>119</option>
            <option value='120'>120</option>
          </select>
        </form>
        <br/>
        <button onClick={this.validateData}>Next</button>
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
    persistPersonalDetails: userDetails => {
      dispatch(persistPersonalDetails(userDetails))
    }
  }
}

 export const PersonalInformation = connect(mapStateToProps,  mapDispatchToProps
)(PersonalInformationComp)



