import React, { useEffect } from "react";
import { useJsonContext } from "../contexts/JsonContext";

const JsonBeautifier = () => {
  const { state, dispatch } = useJsonContext();

  const handleInputChange = (e) => {
    dispatch({ type: "ENTER_Input_JSON", payload: e.target.value });
  };

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(state.input);
      const beautifiedJson = JSON.stringify(parsedJson, null, 2);
      dispatch({ type: "ENTER_OUTPUT_JSON", payload: beautifiedJson });
    } catch (error) {
      dispatch({ type: "ENTER_OUTPUT_JSON", payload: "Enter input json..." });
    }
  }, [state.input, dispatch]);

  return (
    <div className="json-beautifier">
      <div className="vertical-layout">
        <h2>Input</h2>
        <textarea
          value={state.input}
          onChange={handleInputChange}
          rows="10"
          cols="50"
        />
        <div className="buttons">
          <button onClick={() => navigator.clipboard.writeText(state.output)}>
            Copy To Clipboard
          </button>
          <button
            onClick={() => dispatch({ type: "ENTER_Input_JSON", payload: "" })}
          >
            Clear
          </button>
        </div>
        <h2>Output</h2>
        <pre>{state.output}</pre>
      </div>
    </div>
  );
};

export default JsonBeautifier;
