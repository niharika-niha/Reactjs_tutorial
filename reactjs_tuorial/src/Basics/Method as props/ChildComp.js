import React from "react";
export default function ChildComp(props){
    console.log(props.value)
return(
    <button onClick={()=>props.value('niha')}>Greeting</button>
)
}