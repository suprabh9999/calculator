import React from 'react';
import './calculator.scss';
import classes from './calculator.scss';
import TableRow from '../table/tableRow';
import ShowInput from '../showInput/showInput';
import ComputedValue from '../computedValue/computedValue';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            computedValue : 0,
            firstOperand:[],
            secondOperator:[],
            isSecondOpertor : false,
            operator:''
        }
        this.listOfOperations=[];
    }

    displayInput=()=>{
        return this.state.firstOperand.join('')+this.state.operator+this.state.secondOperator.join('');
    }

    clearHandler=()=>{
        this.setState({firstOperand : [], secondOperator:[], operator:'',isSecondOpertor:false,computedValue:0});
    }

    computeValue=()=>{
        let operator = this.state.operator;
        let operandOne = Number(this.state.firstOperand.join(''));
        let operandTwo = Number(this.state.secondOperator.join(''));
        let result =null;
        switch (operator){
            case '+' : 
                result = operandOne + operandTwo;
            break;

            case '-' : 
                result = operandOne - operandTwo;
            break;

            case '/' : 
                result = operandOne / operandTwo;
            break;

            case 'X' : 
                result = operandOne * operandTwo;
            break;
            default : 
                //Do nothing
            
        }
        this.setState({computedValue : result},this.pushToLocalStorage);
    }

    pushToLocalStorage=()=>{
        let value = this.state.firstOperand.join('')+' '+ this.state.operator + ' ' + 
            this.state.secondOperator.join('')+ ' = ' + this.state.computedValue;

        this.listOfOperations = this.listOfOperations.concat(value);

        localStorage.setItem('operations',this.listOfOperations);
        console.log(localStorage.getItem('operations'));
    }

    onInputHandler=(value)=>{
        if(value ==='='){
            this.computeValue();
        }
        else if(!this.state.isSecondOpertor && (value ==='+' || value === '-' || value === 'X' || value === '/')){
            console.log('operator');
            this.setState({isSecondOpertor :true,operator:value});
        }
        else if(this.state.isSecondOpertor){
            let prevState = {...this.state};
            prevState.secondOperator = prevState.secondOperator.concat([value]);
            this.setState(prevState);
        }
        else{
            let prevState = {...this.state};
            prevState.firstOperand = prevState.firstOperand.concat([value]);
            this.setState(prevState);
        }
        
    }


    render(){

        let tableRowData = [ ['7','8','9','/'], ['4','5','6','X'], 
            ['1','2','3','-'], ['.','0','=','+'] ];

        let tableData = tableRowData.map((rowData,index) => <TableRow key={index} rowArray={rowData} 
            onInputHandler= {this.onInputHandler} />);
        return(
            <div className={classes.mainContainer}>
                <ComputedValue computedValue={this.state.computedValue} />

                <ShowInput inputValue={this.state.firstOperand.join('')+this.state.operator+this.state.secondOperator.join('')} 
                    clearHandler = {this.clearHandler} />

                <table>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;