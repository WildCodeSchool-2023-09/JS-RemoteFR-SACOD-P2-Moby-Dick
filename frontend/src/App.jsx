import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import BattleWild from "./components/BattleWild";
import Home from "./components/Home";
import Hub from "./components/Hub";
import PokeCenter from "./components/PokeCenter";
import Footer from "./components/Footer";
import MenuPlayer from "./components/MenuPlayer";
import "./App.css";

function App() {
  const isHub = useMatch("/hub");
  const isBattle = useMatch("/battle");
  const isBattleWild = useMatch("/battle-wild");
  const isPokeCenter = useMatch("/poke-center");

  return (
    <div>
      <NavBar />
      <div className="container">
        {(isHub || isBattle || isBattleWild || isPokeCenter) && (
          <div className="menuPlayerContainer">
            <MenuPlayer />
          </div>
        )}
        <main className="battleContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hub" element={<Hub />} />
            <Route path="battle" element={<Battle />} />
            <Route path="battle-wild" element={<BattleWild />} />
            <Route path="poke-center" element={<PokeCenter />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
