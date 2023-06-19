import React, { useContext } from "react";
import { BsPlus } from "react-icons/bs";
import "../Button/Button.css";
import NewInputContext from "../../../context/NewInputContext";

const Button = () => {
  const newValues = useContext(NewInputContext);
  const saveInfo = () => {
    console.log(newValues.input, newValues.chosenCategory);
  };
  return (
    <NewInputContext.Consumer>
      {(newValues) => (
        <div className="button d-flex justify-content-center align-items-center fs-2">
          <BsPlus onClick={saveInfo} />
        </div>
      )}
    </NewInputContext.Consumer>
  );
};

export default Button;
