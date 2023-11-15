import React from "react";
import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import BattleWild from "./components/BattleWild";
import Home from "./components/Home";
import Starter from "./components/Starter";
import Hub from "./components/Hub";
import PokeCenter from "./components/PokeCenter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Starter />
      <Hub />
      <BattleWild />
      <Battle />
      <PokeCenter />
      <Footer />
    </div>
  );
}

export default App;
