import React,{Component} from "react";

// with out constructor and super

// class CName extends React.Component{
//     render(){  return( <h1>Hello class component</h1>  )    }
// }

// with constructor and super

// class CName extends Component{
//     constructor(){
//         super();
//     }
//     render(){ return(<h1>Hello class components</h1>)}
// }

// using props
class CName extends Component {
    constructor(props)
    {
      super(props);     
      this.state={
        myname:"niharika"
      }
    }
    render()
    {
       const {name}=this.props //destructing props
      //  const {state1,state2}=this.state--> syntax for destructing state
       
      const style={
        color:"white",
        background:"black",
        textAlign:"center"        
    }
    //using props we can run both the return stmt
    return (
      <div>
    <h1 style={style}>Welcome {this.props.name} </h1> 
    <h1 >Welcome {name} </h1>   {/* declared name in render  */}
    <h1>hello {this.state.myname}</h1>
      </div>

    )

  }
}

 export default CName;