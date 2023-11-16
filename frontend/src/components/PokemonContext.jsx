import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [capturedPokemons, setCaptured] = useState({});
  const [team, setTeam] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [enemyTeam, setEnemyTeam] = useState([]);

  const addToTeam = (pokemonToAdd) => {
    setTeam((prevTeam) => {
      if (
        prevTeam.length < 6 &&
        !prevTeam.some((p) => p.name === pokemonToAdd.name)
      ) {
        return [...prevTeam, { ...pokemonToAdd, currentHp: pokemonToAdd.hp }];
      }
      return prevTeam;
    });
  };

  const removeFromTeam = (pokemonToRemove) => {
    setTeam((prevTeam) =>
      prevTeam.filter((pokemon) => pokemon.name !== pokemonToRemove.name)
    );
  };

  const addToEnemyTeam = (pokemonToAdd) => {
    setEnemyTeam((prevTeam) => {
      if (prevTeam.length < 6) {
        return [...prevTeam, { ...pokemonToAdd, currentHp: pokemonToAdd.hp }];
      }
      return prevTeam;
    });
  };

  function generateEnemyTeam() {
    if (!allPokemons || allPokemons.length === 0) {
      return;
    }

    setEnemyTeam([]);

    const randomTeam = [];
    while (randomTeam.length < 6) {
      const randomIndex = Math.floor(Math.random() * allPokemons.length);
      const randomPokemon = allPokemons[randomIndex];

      if (!randomTeam.some((pokemon) => pokemon.name === randomPokemon.name)) {
        randomTeam.push({ ...randomPokemon, currentHp: randomPokemon.hp });
      }
    }

    setEnemyTeam(randomTeam);
  }

  function generateRandomWild() {
    if (!allPokemons || allPokemons.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * allPokemons.length);
    const randomPokemon = allPokemons[randomIndex];

    setEnemyTeam([{ ...randomPokemon, currentHp: randomPokemon.hp }]);
  }

  const setPokemonHp = (pokemonName, newHp) => {
    setTeam((prevTeam) =>
      prevTeam.map((pokemon) =>
        pokemon.name === pokemonName
          ? { ...pokemon, currentHp: newHp }
          : pokemon
      )
    );
    setEnemyTeam((prevTeam) =>
      prevTeam.map((pokemon) =>
        pokemon.name === pokemonName
          ? { ...pokemon, currentHp: newHp }
          : pokemon
      )
    );
  };

  const value = useMemo(
    () => ({
      capturedPokemons,
      setCaptured,
      team,
      setTeam,
      addToTeam,
      enemyTeam,
      setEnemyTeam,
      allPokemons,
      setAllPokemons,
      addToEnemyTeam,
      generateEnemyTeam,
      removeFromTeam,
      setPokemonHp,
      generateRandomWild,
    }),
    [capturedPokemons, team, enemyTeam, allPokemons, setPokemonHp, setCaptured]
  );

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PokemonProvider };
