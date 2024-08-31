import { createContext, useContext } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  return <CounterContext.Provider value={{}} >
    {children}
    </CounterContext.Provider>;
};
