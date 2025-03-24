import React from "react";
import { JsonProvider } from "./contexts/JsonContext";
import JsonBeautifier from "./components/JsonBeautifier";
import "./App.css";

const App = () => {
  return (
    <JsonProvider>
      <div className="app">
        <JsonBeautifier />
      </div>
    </JsonProvider>
  );
};

export default App;
