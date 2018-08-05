import React from 'react';
import classes from './showInput.scss';

const showInput = (props)=>{
    return(
        <div className={classes.showInput}>
            <button className={classes.customButton} onClick={props.clearHandler}>CLEAR</button>
            <div className={classes.input}> {props.inputValue} </div>
        </div>
    );
}

export default showInput;