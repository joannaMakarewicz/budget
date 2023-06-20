import React, { useState } from "react";
import InputArea from "../../components/InputArea/InputArea";
import Summary from "../../components/Summary/Summary";
import Heading from "../../components/Heading/Heading";
import NewInputContext from "../../context/NewInputContext";
import "../Home/Home.css";
import CategoryContext from "../../context/CategoryContext";

const Home = () => {

  const categories = ['travel', 'medical', 'home', 'insurance', 'meals', 'car', 'fuel', 'personal care', 'fitness', 'gifts', 'other'];
  const [input, setInput] = useState('');
  const [chosenCategory, setChosenCategory] = useState('Open')
  const [price, setPrice] = useState('')

  return (
    <main className="home p-2 w-100">
      <Heading />
      <CategoryContext.Provider value={{categories:categories}}>
        <NewInputContext.Provider value={{
          chosenCategory:chosenCategory,
          setChosenCategory:setChosenCategory,
          input:input,
          setInput:setInput,
          price:price,
          setPrice:setPrice
          }}>
          <InputArea />
          <Summary />
        </NewInputContext.Provider>
      </CategoryContext.Provider>
    </main>
  );
};

export default Home;
