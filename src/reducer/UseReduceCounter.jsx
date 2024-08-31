import React, { useReducer } from 'react'
import { counterReducer } from './counterReducer'



export const UseReduceCounter = () => {
    const [state,dispatch] =useReducer(counterReducer,{
        count:0,
    })


  return (
    <div>

<h1 >UseReduce Counter: {state.count}</h1>
<button style={{marginRight:"10px", fontSize:"20px"}} onClick={()=>dispatch({type:"decrement"})}> - </button>
    <button  style={{marginRight:"10px", fontSize:"20px"}} onClick={()=>dispatch({type:"increment"})}> + </button>
    
    <button style={{marginRight:"10px", fontSize:"20px"}} onClick={()=>dispatch({type:"reset",payload:0})}> Reset: </button>
   
    </div>
  )
}
