import React, { Component } from 'react';
import TextBox from '../../CommonInputComponents/Textbox/textbox';
import RadioButton from '../../CommonInputComponents/RadioButton/radioButton';
import classes from './App.scss';
import SelectBox  from '../../CommonInputComponents/SelectBox/selectBox.js';
import Calculator from '../CalculatorApp/calculator/calculator';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name : {
        isError:false, isSuccess:false, value:'', isValidated:false
      },
      phone : {
        isError:false, isSuccess:false, value:'', isValidated:false
      },
      selectedCountry:null
    }
  }

  /*  This is a callback function which will execute at onBlur event of the textbox and 
        will set the application state. */

  retrieveDataFromTextBox=(dataObj,id)=>{
    let prevState = {...this.state};
    prevState[id].isError = dataObj.isError;
    prevState[id].isSuccess = dataObj.isSuccess;
    prevState[id].value = dataObj.value;
    this.setState(prevState);
  }
  /* This function is the button click handler. */
  onButtonClickHandler=()=>{
    if(this.state.name.isSuccess && this.state.phone.isSuccess && this.state.selectedCountry){
      alert('Success '+this.state.selectedCountry);
    }
    else{
      alert('Cannot move further as there is an error.');
    }
  }

  radioButtonOnBlurHandler=(event)=>{
    this.setState({selectedCountry:event.target.value});
  }
  render() {
    const radioGroup = ['Russia','India','UK','USA','China','Japan','Israel'].map((value,index)=>{
      return(
        <RadioButton value={value} key={index} groupName='countries' 
          radioButtonOnBlurHandler={this.radioButtonOnBlurHandler} />
      );
    });
    return (
      <div className={classes.app} role='main'>
        <h1>Excited ? Hold your excitement we will be doing a lot here....</h1>
        <h2>We are going to create a reusable textbox & it will be a lot of fun. Mind my words...</h2>
        <SelectBox />

        

        <TextBox type='name' id='name' placeholder='Please enter a name of 10 characters' 
         retrieveDataFromTextBox={this.retrieveDataFromTextBox} maxLength='10' />

         <TextBox type='phone' id='phone' placeholder='Please enter 10 digit mobile number'
         retrieveDataFromTextBox={this.retrieveDataFromTextBox} maxLength='10'  />
         
         <h1>We'll display radio button in a while</h1>

        {radioGroup}
        <button style={{marginTop:'20px'}} onClick={this.onButtonClickHandler} >Click me</button>

        <div style={{position:'fixed',bottom:'10px'}}>Note : This page is WCAG compliance.</div>
      </div>
    );
  }
}

export default App;
