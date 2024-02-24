import React from "react";
import InsertionData from "./components/InsertionData";
import DisplayData from "./components/DisplayData";
import "./App.css";
import TodoContext from "./Data/TodoContext";

function App() {

  return (
    <>
      <TodoContext>
        <div className="container">
          <InsertionData />
          <DisplayData />
        </div>
      </TodoContext>
    </>
  );
}

export default App;
