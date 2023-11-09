import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

function MenuPlayer() {
  const { team, removeFromTeam } = useContext(PokemonContext);

  return (
    <div className="menu">
      <ul className="menu-list">
        {team.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />{" "}
            <span>
              {pokemon.name} <br />{" "}
              <progress className="pokemonHpBar" value={40} max={pokemon.hp} />
            </span>
            <button
              className="buttonRemoveFromTeam"
              type="button"
              onClick={() => removeFromTeam(pokemon)}
            >
              🗑️❌
            </button>
          </li>
        ))}
        <li>
          <Link to="/Pokedex" className="image-button">
            <img src="./pokedex.png" alt="Pokedex" />
          </Link>
        </li>
        <li>
          <button type="button">
            <img src="./sac.png" alt="Sac" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuPlayer;
