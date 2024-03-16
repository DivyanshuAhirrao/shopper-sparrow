import React, { useReducer } from "react";

const ReducerTrial = () => {
  let initialState = 0;
  let preState = 0;
  const reducer = (state, action) => {
    preState = state ;
    console.log(state, action , preState);
    switch (action.type) {
      case "I":
        return state + 1;
      case "D":
        return state - 1;
      case "F":
        return state + preState;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center flex-col gap-3">
      <h2 className="text-[60px]"> {state} </h2>
      <button
        onClick={() => dispatch({ type: "I" })}
        className="bg-purple-400 rounded-lg px-10 py-2"
      >
        {" "}
        Increase{" "}
      </button>
      <button
        onClick={() => dispatch({ type: "D" })}
        className="bg-purple-400 rounded-lg px-10 py-2"
      >
        {" "}
        Decrease{" "}
      </button>
      <button
        onClick={() => dispatch({ type: "F" })}
        className="bg-purple-400 rounded-lg px-10 py-2"
      >
        {" "}
        Print fibonacci{" "}
      </button>
    </div>
  );
};

export default ReducerTrial;
