import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import Home from "./components/Home";
import Hub from "./components/Hub";
import Footer from "./components/Footer";
import "./App.css";
import PokeCenter from "./components/PokeCenter";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <Hub />
      <Battle />
      <PokeCenter />
      <Footer />
    </div>
  );
}

export default App;
