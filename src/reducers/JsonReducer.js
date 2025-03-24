const JsonReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_Input_JSON":
      return { ...state, input: action.payload };
    case "ENTER_OUTPUT_JSON":
      return { ...state, output: action.payload };
    default:
      return state;
  }
};

export default JsonReducer;
