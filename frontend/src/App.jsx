import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import BattleWild from "./components/BattleWild";
import Home from "./components/Home";
import Hub from "./components/Hub";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <BattleWild />
      <Home />
      <Hub />
      <Battle />
      <Footer />
    </div>
  );
}

export default App;
