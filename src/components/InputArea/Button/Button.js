import React, { useContext } from "react";
import { BsPlus } from "react-icons/bs";
import "../Button/Button.css";
import NewInputContext from "../../../context/NewInputContext";
import axiosInstance from "../../../services/config";

const Button = () => {
  const newValues = useContext(NewInputContext);
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
      console.log("poszło");
    } catch (ex) {
      console.log(ex.response);
    }
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
