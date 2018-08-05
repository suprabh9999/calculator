import React from 'react';
import Select from 'react-select';
import classes from './selectBox.css';



const options = [
    { value: '', label: '' },
    { value: 0, label: 'Zero' },
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' }
  ];

class SelectBox extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedOption:options[0],
            count:1,
            close:true
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption,close:false });
        console.log(`Option selected:`, selectedOption);
      }
      changePlaceHolder=()=>{
          for (let key in options){
              if(options[key].value === this.state.count){
                this.setState({selectedOption : options[key]});
                break;
              }
          }
      }

    render(){
        const { selectedOption } = this.state;
        return(
            <div>
            <Select 
                value={selectedOption} 
                onChange={this.handleChange}
                options={options}
                // menuIsOpen={true}
                className={classes.trialSelectBox}
                // isDisabled={true}
                // autoFocus
                // isSearchable={false}
                // name={selectedOption.value}
                // menuIsOpen={this.state.close}
               
            />
            <button onClick={this.changePlaceHolder}>Click me  </button>
            </div>
        );
    }
}

export default SelectBox;
