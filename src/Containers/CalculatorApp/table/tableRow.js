import React from 'react';
import classes from './tableRow.scss';

const TableRow = (props)=>{
    let tableData = props.rowArray.map((value,index)=><td key={index} onClick={()=>props.onInputHandler(value)} >{value}</td>);
    return (
        <tr className={classes.tableRow}>{tableData}</tr>
    );
}

export default TableRow;