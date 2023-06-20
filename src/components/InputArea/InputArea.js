import React from "react";
import Input from "../InputArea/Input/Input";
import InputCategory from "../InputArea/InputCategory/InputCategory";
import Button from "./Button/Button";
import "../InputArea/InputArea.css";
import InputPrice from "./InputPrice/InputPrice";

const InputArea = () => {
  return (
    <form className="inputArea mt-5 mb-5 p-2">
      <Input />
      <InputCategory />
      <InputPrice />
      <Button />
    </form>
  );
};

export default InputArea;
