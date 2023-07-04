import React, { useContext, useState } from "react";
import "../Input/Input.css";
import NewInputContext from "../../../context/NewInputContext";

const Input = () => {
  const newInputState = useContext(NewInputContext);
 
  const newInput = (e) => {
    newInputState.setInput(e.target.value);
  };


  return (
    <NewInputContext.Consumer>
      {(newInputState) => (
        <div className="input">
          <label
            className="input__label d-block text-start"
            htmlFor="input"
          ></label>
          <input
            className="input__input w-100"
            id="input"
            type="text"
            onChange={newInput}
            placeholder="add expenses"
            value={newInputState.input}
          />
        </div>
      )}
    </NewInputContext.Consumer>
  );
};

export default Input;
