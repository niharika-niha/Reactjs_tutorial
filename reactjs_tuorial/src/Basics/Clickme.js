import React from "react";
export default class Clickme extends React.Component{

    constructor(){
        super();
        this.state={
            flag:'true',
        }
        this.Clickme=this.Clickme.bind(this);
    }
    Clickme(){
        if(this.state.flag==='false'){
            this.setState({flag:'true'})
        }
        else{
            this.setState({flag:'false'})
        }
        console.log('flag changed')
    }
    render(){
        const names=['Soumya','Niharika','Chandu','Reddy']
        return(
            <>
            <button onClick={this.Clickme} style={this.state.flag&&{background:'Green'}}>Clickme</button>
            <div>               
                {
                    this.state.flag==='false'?
                    <div>
                    {
                        names.map((name,index)=><h1>{index+1}{name}</h1>)
                    }
                    </div>
                    :
                    <h1 >Welcome Niharika</h1>
                }
                 
            </div>
            </>
        )
    }
}