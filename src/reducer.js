import { combineReducers } from 'redux';
import {types} from './actions.js'

const intialState = {
    personalDetails : {},
    educationDetails:{},
}

  function reactDemo(state = intialState, action){
   console.log(state, action)
   switch(action.types){
     case types.educationDetails : {
       return {...state, educationDetails: action.educationDetails}
     }
     case types.personalDetails :{
       return {...state, personalDetails: action.userDetails}
     }
     default : return state
   }
 } 
 function reducer2 (state= intialState, action){
   return state
 }
 export const reactApp = combineReducers({
    reactDemo,
    reducer2,
  })
  
  