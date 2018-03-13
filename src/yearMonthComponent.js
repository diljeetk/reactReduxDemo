import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class YearMonthComponent extends Component {
    
  render() {
    return (
      <span>
          <select ref='month'>
            <option value='01'>1</option>
            <option value='02'>2</option>
            <option value='03'>3</option>
            <option value='04'>4</option>
            <option value='05'>5</option>
            <option value='06'>6</option>
            <option value='07'>7</option>
            <option value='08'>8</option>
            <option value='09'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select> Month &nbsp;&nbsp;&nbsp;
          <select ref='year'>
            <option value='2000'>2000</option>
            <option value='2001'>2001</option>
            <option value='2002'>2002</option>
            <option value='2003'>2003</option>
            <option value='2004'>2004</option>
            <option value='2005'>2005</option>
            <option value='2005'>2005</option>
            <option value='2006'>2006</option>
            <option value='2007'>2007</option>
            <option value='2008'>2008</option>
            <option value='2009'>2009</option>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
          </select> Year &nbsp;&nbsp;&nbsp;  
          
      </span>
    );
  }
}
