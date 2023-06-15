import React from "react";
import InputArea from "../../components/InputArea/InputArea";
import Summary from "../../components/Summary/Summary";
import Heading from "../../components/Heading/Heading";
import CategoryContext from "../../context/CategoryContext";
import "../Home/Home.css";

const Home = () => {

  const categories= ['travel', 'medical', 'home', 'insurance', 'meals', 'car', 'fuel', 'personal care', 'fitness', 'gifts', 'other'];
  return (
    <main className="home p-2 w-100">
      <Heading />
      <CategoryContext.Provider value={{categories:categories}}>
        <InputArea />
        <Summary />
      </CategoryContext.Provider>
    </main>
  );
};

export default Home;
