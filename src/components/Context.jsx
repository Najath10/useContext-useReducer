import { createContext, useState,  } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {

 const [count, setCount] = useState(0)

 const increment=()=>{
    if (count < 10) {
      setCount((prev)=>prev+1);
    }
  }

  const decrement=()=>{
    if (count > 0) {
    setCount((prev)=>prev - 1);
    }
  }

  return <CounterContext.Provider value={{increment,decrement,count}} >
    {children}
    </CounterContext.Provider>;
};
