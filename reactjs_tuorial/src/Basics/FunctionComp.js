import React from 'react';
const style={
    color:"white",
    background:"blue",
    textAlign:"center"
  }

//  1.normal function without props

// export default function Name(){
//     return(<h1>My name</h1>)
// }


// 2.normal function with props

// export default function Name({name}){ return(<h1>My {name}</h1>) }


// 3.normal function with props and const

export default function Name(props){
    const {name}=props
    return(<h1 style={style}>My {name}</h1>)
}

// 4.arrow function with props and es6 feature const
// export const AName = (props) => {
//       const {name}=props
//       return (
//           <h1>
//             Hello {name} 
//           </h1>
//       )
//     }


//  5.arrow function without props

// export const AName=()=>{return <h1>My Name</h1>}


// 6.arrow function with props 

export const AName=(props)=>{ return(<h1>My {props.name}</h1>) }