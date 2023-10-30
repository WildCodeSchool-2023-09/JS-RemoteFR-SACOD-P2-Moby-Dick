import NavBar from "./components/NavBar";
import Battle from "./components/Battle";
import Home from "./components/Home";
import Hub from "./components/Hub";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <Hub />
      <Battle />
    </div>
  );
}

export default App;
