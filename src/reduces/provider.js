import { Children, createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const Context = createContext([]);
const Provider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{Children}</Context.Provider>
  );
};

export {Context, Provider}