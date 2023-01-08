import React from "react";
import "./InputField.css";

function Field({ input, setInput }) {
  function getData(e) {
    setInput(e.target.value);
  }

  return (
    <div className="input-field">
      <input type="text" placeholder="Enter text here" value={input} onChange={getData} />
    </div>
  );
}

export default Field;
