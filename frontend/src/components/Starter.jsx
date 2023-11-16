import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

function Starter() {
  const { addToTeam, capturedPokemons, setCaptured } =
    useContext(PokemonContext);

  const handleAddToTeam = (pokemonName, imageUrl) => {
    const pokemonToAdd = {
      name: pokemonName,
      imageUrl,
    };

    if (!capturedPokemons[pokemonName]) {
      setCaptured((prevCaptured) => ({
        ...prevCaptured,
        [pokemonName]: true,
      }));

      addToTeam(pokemonToAdd);
    }
  };

  return (
    <div className="starter-container">
      <p className="pokechoice">Chaque aventure débute par un choix</p>
      <div className="buttons-starter">
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE EAU 💧"
          onClick={() => handleAddToTeam("Carapuce", "carapuce.png")}
        >
          <img src="carapuce.png" alt="Carapuce" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE PLANTE 🌿"
          onClick={() => handleAddToTeam("Bulbizarre", "bulbizarre.png")}
        >
          <img src="bulbizarre.png" alt="bulbasaur" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE FEU 🔥"
          onClick={() => handleAddToTeam("Salameche", "salameche.png")}
        >
          <img src="salameche.png" alt="Salameche" />
        </Link>
      </div>
    </div>
  );
}
export default Starter;
