import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

function Starter() {
  const { addToTeam, setCaptured } = useContext(PokemonContext);

  const handlePokemonSelect = (pokemon) => {
    addToTeam(pokemon);
    setCaptured((prevCaptured) => ({
      ...prevCaptured,
      [pokemon.name]: true,
    }));
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
          onClick={() =>
            handlePokemonSelect({
              name: "squirtle",
              imageUrl:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
              imageUrlBack:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
              attack: 100,
              defense: 75,
              hp: 70,
            })
          }
        >
          <img src="carapuce.png" alt="Carapuce" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE PLANTE 🌿"
          onClick={() =>
            handlePokemonSelect({
              name: "bulbasaur",
              imageUrl:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              imageUrlBack:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
              attack: 100,
              defense: 75,
              hp: 70,
            })
          }
        >
          <img src="bulbizarre.png" alt="bulbasaur" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE FEU 🔥"
          onClick={() =>
            handlePokemonSelect({
              name: "charmander",
              imageUrl:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              imageUrlBack:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
              attack: 100,
              defense: 75,
              hp: 70,
            })
          }
        >
          <img src="salameche.png" alt="Salameche" />
        </Link>
      </div>
    </div>
  );
}

export default Starter;
