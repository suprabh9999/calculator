import React,{Component} from 'react';
import classes from './textbox.scss';   
import {genericValidator} from '../validation.js';
import {onKeyPressHandler} from '../onKeyPress.js';
import {SuccessMsg} from '../successMsg';
import {ErrorMsg} from '../errorMsg';
export default class Textbox extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:this.props.defaultValue ? this.props.defaultValue : '',
            isError:false,
            isSuccess:false
        }
        this.errorMsg = this.props.errorMsg ? this.props.errorMsg : ErrorMsg[this.props.type];
        this.successMsg = this.props.successMsg ? this.props.successMsg : SuccessMsg[this.props.type];
        this.onKeyPressHandler2=null;
    }
    
    textBoxOnchangeHandler=(event)=>{
        this.setState({inputValue : event.target.value});
        this.onKeyPressHandler2 = onKeyPressHandler(this.props.type);
        this.onKeyPressHandler2(event);
    }
    
    textBoxOnBlurHandler=()=>{
        const result = genericValidator(this.props.type,this.state.inputValue);
        this.setState({isError : !result, isSuccess : result},()=>{
            const obj = {
                value : this.state.inputValue,
                isError :  this.state.isError,
                isSuccess : this.state.isSuccess
            }
            this.props.retrieveDataFromTextBox(obj,this.props.id);
        });   
    }

    onkeyDownHandler=(event)=>{
        this.onKeyPressHandler2 = onKeyPressHandler(this.props.type);
        this.onKeyPressHandler2(event);
    }
    render(){
        return(
            <div className={classes.textBoxContainer}>
                <input className={this.state.isSuccess ? classes.inputSuccess : classes.input} 
                    type={this.props.type ? this.props.type: 'text'} 
                    value={this.state.inputValue} 
                    onChange={(event)=>this.textBoxOnchangeHandler(event)} 
                    onBlur={this.textBoxOnBlurHandler}  
                    // onKeyDown={(event)=>this.onkeyDownHandler(event)}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxLength}
                    aria-label={this.props.placeholder}
                     />
                {this.state.isError ? <span className={classes.errorContent}>{this.errorMsg}</span> : null}
                {this.state.isSuccess ? <span className={classes.successContent}>{this.successMsg}</span> : null}
            </div>
        );
    }  
}
