import React, { useContext } from "react";
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
            className="input__input w-100 p-1"
            id="input"
            type="text"
            onChange={newInput}
          />
        </div>
      )}
    </NewInputContext.Consumer>
  );
};

export default Input;
