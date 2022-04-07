import React from "react";
export default class ContactList extends React.Component{
    constructor(props){
        super(props);
        

    }
    
    render(){
        console.log("list",this.props.contacts)

        const deleted=(id)=>{
        console.log("id",this.props.contacts[id])
        }
        const list=this.props.contacts.map((con,index)=>{
               return(
                   <>
                   <h1>Name :{con.name}, Email:{con.email}</h1>
                   <button onClick={()=>deleted(index)}>del</button>
                   </>
               )
        })
        return(
            <div>
           ContactList
           {list}
            </div>
        )
    }
}