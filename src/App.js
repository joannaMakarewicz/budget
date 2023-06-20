import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  console.log('HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!')
  return (
    <div className="App">
     <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
