import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [headingText, setHeadingText] = useState("Hola");
  const [isMouseOver, setMouseOver] = useState(false);

  function OnClickitick() {
    setHeadingText("hello");
  }

  function MouseOver() {
    setMouseOver(true);
  }

  function MouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <Input />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={MouseOver}
        onClick={OnClickitick}
        onMouseOut={MouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
