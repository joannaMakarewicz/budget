import React, { useContext } from "react";
import "../Input/Input.css";
import NewInputContext from "../../../context/NewInputContext";

const InputPrice = () => {
    const newPriceState = useContext(NewInputContext);
    const newPrice = (e) => {
      newPriceState.setPrice(e.target.value);
    };
    return (
      <NewInputContext.Consumer>
        {(newPriceState) => (
          <div className="input">
            <label
              className="input__label d-block text-start"
              htmlFor="price"
            ></label>
            <input
              className="input__input w-100 p-1"
              id="price"
              type="text"
              onChange={newPrice}
            />
          </div>
        )}
      </NewInputContext.Consumer>
    );
  };

export default InputPrice;
