import { Link } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

function Starter() {
  const { addToTeam } = useContext(PokemonContext);

  const handleAddToTeam = (pokemon) => {
    addToTeam(pokemon);
  };

  return (
    <div className="starter-container">
      <p className="pokechoice">Chaque aventure débute par un choix</p>
      <div className="buttons-starter">
        <Link
          onClick={() => handleAddToTeam({ name: "Carapuce" })}
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE EAU 💧"
        >
          <img src="carapuce.png" alt="Carapuce" />
        </Link>
        <Link
          onClick={() => handleAddToTeam({ name: "Bulbizarre" })}
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE PLANTE 🌿"
        >
          <img src="bulbizarre.png" alt="bulbasaur" />
        </Link>
        <Link
          onClick={() => handleAddToTeam({ name: "Salameche" })}
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE FEU 🔥"
        >
          <img src="salameche.png" alt="Salameche" />
        </Link>
      </div>
    </div>
  );
}

export default Starter;
