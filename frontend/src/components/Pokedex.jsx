import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

function Pokemondex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const { capturedPokemons, setCaptured, addToTeam, allPokemons } =
    useContext(PokemonContext);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setCaptured(capturedPokemons);
        setPokemons(allPokemons);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des Pokémon",
          error
        );
      }
      setLoading(false);
    };

    getPokemons();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="pokemondex">
      <ul className="pokemondexul">
        {pokemons.map((pokemon) => {
          const isCaptured = capturedPokemons[pokemon.name];
          return (
            <li key={pokemon.name} className="pokemon-card">
              {isCaptured ? (
                <>
                  <img src={pokemon.imageUrl} alt={pokemon.name} />
                  <div>{pokemon.name}</div>
                  <div>Attaque: {pokemon.attack}</div>
                  <div>Défense: {pokemon.defense}</div>
                  <div>PV: {pokemon.hp}</div>
                  <button type="button" onClick={() => addToTeam(pokemon)}>
                    Ajouter à l'équipe
                  </button>
                </>
              ) : (
                <>
                  <div
                    className="unknown-pokemon"
                    style={{ marginTop: "60px" }}
                  >
                    <img src="/zarbi.png" alt="unknown" />
                  </div>{" "}
                  <div className="unknown-text"> </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemondex;
