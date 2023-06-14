import React from "react";
import InputArea from "../../components/InputArea/InputArea";
import Summary from "../../components/Summary/Summary";
import Heading from "../../components/Heading/Heading";
import "../Home/Home.css";

const Home = () => {
  return (
    <main className="home p-2">
      <Heading />
      <InputArea />
      <Summary />
    </main>
  );
};

export default Home;
