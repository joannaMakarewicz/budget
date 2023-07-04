import React, { useContext, useState } from "react";
import Input from "../InputArea/Input/Input";
import InputCategory from "../InputArea/InputCategory/InputCategory";
import NewInputContext from "../../context/NewInputContext";
import axiosInstance from "../../services/config";
import Button from "./Button/Button";
import "../InputArea/InputArea.css";
import InputPrice from "./InputPrice/InputPrice";

const InputArea = () => {

  const newValues = useContext(NewInputContext);
  // const [inputValue, setInputValue] = useState();
  // const [priceValue, setPriceValue] = useState();



  const date = new Date();
  let year = date.getFullYear();
  year = year <= 9 ? "0" + year : year;
  let month = date.getMonth();
  month = month <= 9 ? "0" + month : month;
  let day = date.getDate();
  day = day <= 9 ? "0" + day : day;

  const myDate = day + "." + month + "." + year;


  const saveInfo = async () => {
    try {
      const res = await axiosInstance.post("/expenses", {
        records: [
          {
            fields: {
              name: newValues.input,
              category: newValues.chosenCategory,
              price: newValues.price,
              date:myDate
            },
          },
        ],
      });
      newValues.setInput('');
      newValues.setPrice('');
    } catch (ex) {
      console.log(ex.response);
    }
  };

  return (
    <form className="inputArea mt-5 mb-5 p-2">
      <Input />
      <InputCategory />
      <InputPrice saveInfo={() => saveInfo}/>
      <Button saveInfo={() => saveInfo}/>
    </form>
  );
};

export default InputArea;
