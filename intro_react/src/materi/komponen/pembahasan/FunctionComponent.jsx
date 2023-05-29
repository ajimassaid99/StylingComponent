import React from "react";
import { useState } from "react";

const FunctionComponent =({name}) =>{
    const [value,setValue]= useState(0);
    const handleIncrement=()=>{
        setValue(value+1);
    }
    const handleDecrement=()=>{
        if(value>0){
        setValue(value-1);
        }
    }
        return(
            <div>
                <h1>Membuat Komponen Dengn Fungsional  Component</h1>
                <h2> Hello {name}, Selamat Belajar</h2>
                <button onClick={handleDecrement}>-</button>
                <span> {value} </span>
                <button onClick={handleIncrement}>+</button>
           
            </div>
        )
}

FunctionComponent.defaultProps={
    name: "user"
}
export default FunctionComponent;