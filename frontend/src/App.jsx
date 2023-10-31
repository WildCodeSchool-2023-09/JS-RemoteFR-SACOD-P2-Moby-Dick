import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import BattleWild from "./components/BattleWild";
import Home from "./components/Home";
import Hub from "./components/Hub";
import Footer from "./components/Footer";
import "./App.css";
import PokeCenter from "./components/PokeCenter";

function App() {
  return (
    <div>
      <NavBar />
      <BattleWild />
      <Home />
      <Hub />
      <Battle />
      <PokeCenter />
      <Footer />
    </div>
  );
}

export default App;
