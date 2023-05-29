import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionComponent from "./pembahasan/FunctionComponent";

class Component extends React.Component{
    render(){
        return(
            <div>
                <ClassComponent name="Muhammad Aji Massaid"/>
                <FunctionComponent name="Muhammad Aji Massaid"/>
            </div>
        )
    }
}
export default Component;