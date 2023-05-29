import React from "react";
import PropTypes from "prop-types";
class ClassComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value : 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement (){
        this.setState (
            {value : this.state.value + 1}
        );
    }
    handleDecrement (){
        if(this.state.value>0){
        this.setState (
            {value : this.state.value - 1}
        );}
        else{

        }
    }
    render(){
        return(
            <div>
                <h1>Komponen Ini Di buat Dengn Class Component</h1>
                <h2> Hello {this.props.name}</h2>
                <button onClick={this.handleDecrement}>-</button>
                <span> {this.state.value} </span>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
        
    } 
}
ClassComponent.propTypes = {
    name: PropTypes.string.isRequired
  };
export default ClassComponent;