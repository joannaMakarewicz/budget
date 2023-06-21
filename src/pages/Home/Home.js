import React, { useEffect, useState } from "react";
import InputArea from "../../components/InputArea/InputArea";
import Summary from "../../components/Summary/Summary";
import Heading from "../../components/Heading/Heading";
import NewInputContext from "../../context/NewInputContext";
import axiosInstance from "../../services/config";
import "../Home/Home.css";
import CategoryContext from "../../context/CategoryContext";

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [price, setPrice] = useState("");

  const getCategories = async () => {
    await axiosInstance.get("/categories?sort%5B0%5D%5Bfield%5D=name").then((response) => {
      setCategories(response.data.records);
    });
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  return (
    <main className="home p-2 w-100">
      <Heading />
      <CategoryContext.Provider value={{ categories: categories }}>
        <NewInputContext.Provider
          value={{
            chosenCategory: chosenCategory,
            setChosenCategory: setChosenCategory,
            input: input,
            setInput: setInput,
            price: price,
            setPrice: setPrice,
          }}
        >
          <InputArea />
          <Summary />
        </NewInputContext.Provider>
      </CategoryContext.Provider>
    </main>
  );
};

export default Home;
