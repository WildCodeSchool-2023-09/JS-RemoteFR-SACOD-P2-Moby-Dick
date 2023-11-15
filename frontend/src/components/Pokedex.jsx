import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { PokemonContext } from "./PokemonContext";

function Pokemondex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const { capturedPokemons, setCaptured, addToTeam, setAllPokemons } =
    useContext(PokemonContext);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await api.get("?limit=151");
        const pokemonsData = response.data.results;

        const pokemonsDetails = await Promise.all(
          pokemonsData.map(async (pokemon) => {
            const pokemonDetailsResponse = await api.get(pokemon.name);
            return {
              name: pokemon.name,
              imageUrl: pokemonDetailsResponse.data.sprites?.front_default,
              imageUrlBack: pokemonDetailsResponse.data.sprites?.back_default,
              attack: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "attack"
              )?.base_stat,
              defense: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "defense"
              )?.base_stat,
              hp: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "hp"
              )?.base_stat,
              ...pokemonDetailsResponse.data,
            };
          })
        );

        const capturedStatus = pokemonsDetails.reduce(
          (statusAccumulator, pokemon) => {
            return {
              ...statusAccumulator,
              [pokemon.name]: true,
            };
          },
          {}
        );

        setCaptured(capturedStatus);
        setPokemons(pokemonsDetails);
        setAllPokemons(pokemonsDetails);
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
      <ul>
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
                  <div className="unknown-pokemon">???</div>
                  <div>???</div>
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
