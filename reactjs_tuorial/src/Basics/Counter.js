import React from "react";
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increment=this.increment.bind(this)
    }
    increment(){
        // this.setState({count:this.state.count+1},()=>{console.log("call back value",this.state.count) })
       
        // below console print value after update in that case use call back in setState function
        // console.log(this.state.count)  
        this.setState((prevState)=>({ count:prevState.count+1 }))

    }
    incrementFour(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){      
        
        return(
            <>
            <h1>Count= {this.state.count}</h1>
            <button onClick={()=>this.incrementFour()}>increament</button>
            {/* <button onClick={this.incrementFour}>increament</button>
             -->itwill not work bcz it needs binding */}
            {/* <button onClick={this.incrementFour.bind(this)}>increament</button> */}
            

            </>
        )
    }
}
export default Counter;