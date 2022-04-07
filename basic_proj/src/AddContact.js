import React from "react";
import ContactList from "./ContactList";
export default class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
        }
    }
    addValue=(e)=>{
        e.preventDefault();
        if(!(this.state.name||this.state.email)){
            alert("fields should not be empty")
            return
        }
        console.log(this.state)
        this.props.value(this.state)
    }
    render(){
        
        return(
            <div>
                <label>Name</label>
                <input type='text' name="name" value={this.state.name} 
                onChange={(e)=>this.setState({name:e.target.value})}/>
                <label>Email</label>
                <input type='email' name="emai" value={this.state.email}
                onChange={(e)=>this.setState({email:e.target.value})}/>
                <button onClick={this.addValue}>Add</button>
            </div>
        )
    }
}