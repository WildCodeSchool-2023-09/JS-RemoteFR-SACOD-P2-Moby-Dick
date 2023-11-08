import React, { useState, useEffect } from "react";
import api from "../api";

function Pokemondex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

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
              imageUrl: pokemonDetailsResponse.data.sprites.front_default,
              attack: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "attack"
              ).base_stat,
              defense: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "defense"
              ).base_stat,
              hp: pokemonDetailsResponse.data.stats.find(
                (stat) => stat.stat.name === "hp"
              ).base_stat,
              ...pokemonDetailsResponse.data,
            };
          })
        );

        setPokemons(pokemonsDetails);
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Liste de Pokémon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <div>{pokemon.name}</div>
            <div>Attack: {pokemon.attack}</div>
            <div>Defense: {pokemon.defense}</div>
            <div>HP: {pokemon.hp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemondex;
