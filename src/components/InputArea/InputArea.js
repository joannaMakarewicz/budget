import React, { useContext } from "react";
import Input from "../InputArea/Input/Input";
import InputCategory from "../InputArea/InputCategory/InputCategory";
import Button from "./Button/Button";
import CategoryContext from "../../context/CategoryContext";
import "../InputArea/InputArea.css";

const InputArea = () => {
  return (
    <form className="inputArea mt-5 mb-5 p-2">
      <Input />
      <InputCategory />
      <Button />
    </form>
  );
};

export default InputArea;
