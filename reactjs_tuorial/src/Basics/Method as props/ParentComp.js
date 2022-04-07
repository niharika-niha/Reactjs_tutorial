import React from 'react';
import ChildComp from './ChildComp';
export default class ParentComp extends React.Component{
    constructor(){
        super();
        this.greet=this.greet.bind(this)
    }
    greet(ChildName){
        alert(`hello ${ChildName}`);
    }
    render(){
        return(
            <ChildComp value={this.greet}/>
        )
    }
} 