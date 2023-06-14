import React from "react";
import '../Input/Input.css';

const Input = () => {
  return (
    <div  className="input">
      <label className="input__label d-block text-start" htmlFor="input"></label>
      <input className="input__input w-100 p-1" id="input" type="text" />
    </div>
  );
};

export default Input;
