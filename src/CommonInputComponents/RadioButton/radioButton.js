import React,{Component} from 'react';

class RadioButton extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <input style={{width:'900px',background:'green'}} type="radio"  aria-label={this.props.value} name={this.props.groupName}
                    value={this.props.value} onBlur={(event)=>this.props.radioButtonOnBlurHandler(event)}
                    onClick={()=>console.log('Clicked')}
                     /> 
                <span>{this.props.value}</span>
            </div>
        );
    }
}

export default RadioButton;