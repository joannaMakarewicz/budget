import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InputArea from "./components/InputArea/InputArea";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <div className="App">
    <Header/>
      <InputArea/>
      <Summary/>
      <Footer/>
    </div>
  );
}

export default App;
