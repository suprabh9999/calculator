import React from 'react';
import classes from './computedValue.scss';
const computedValue = (props)=>{
    return (
        <div className={classes.computedValue}>
            {props.computedValue}
        </div>
    );
}

export default computedValue;