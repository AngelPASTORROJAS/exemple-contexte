import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const Context = createContext([]);
const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export {Context, Provider}