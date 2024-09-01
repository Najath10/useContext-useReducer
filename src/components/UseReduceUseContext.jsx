import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { ACTIONS } from './ACTIONS';
import { CounterContext1 } from './CounterContext1';



export const UseReduceUseContext = () => {
    const value = useContext(CounterContext1)

    const increment = () => {
        value.dispatch({ type: ACTIONS.INCREMENT });
      };
    
      const decrement = () => {
        value.dispatch({ type: ACTIONS.DECREMENT });
      };
    
      const reset = () => {
        value.dispatch({ type: ACTIONS.RESET }); // Adjust the payload if needed
      };

  return (
    <div>
     <h1>useReducer with userContext:{value.state.count}</h1>        
   
       <button onClick={decrement}>-</button>
       <button onClick={increment}>+</button>
    <button onClick={reset}>Reset</button>
  
    </div> 
    
  )
}
