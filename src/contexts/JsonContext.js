import React, { createContext, useReducer } from "react";
import JsonReducer from "../reducers/JsonReducer";

const JsonContext = createContext();

const initialState = {
  input: "",
  output: "",
};

export const JsonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JsonReducer, initialState);

  return (
    <JsonContext.Provider value={{ state, dispatch }}>
      {children}
    </JsonContext.Provider>
  );
};

export const useJsonContext = () => {
  return React.useContext(JsonContext);
};
