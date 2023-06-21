import React from "react";
import { BsPlus } from "react-icons/bs";
import "../Button/Button.css";
import NewInputContext from "../../../context/NewInputContext";

const Button = ({saveInfo}) => {

  return (
    <NewInputContext.Consumer>
      {(newValues) => (
        <div className="button d-flex justify-content-center align-items-center fs-2">
          <BsPlus onClick={saveInfo()} />
        </div>
      )}
    </NewInputContext.Consumer>
  );
};

export default Button;
