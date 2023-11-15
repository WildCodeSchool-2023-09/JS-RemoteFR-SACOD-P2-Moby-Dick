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
    const randomTeam = [];
    while (randomTeam.length < 6) {
      const randomIndex = Math.floor(Math.random() * allPokemons.length);
      const randomPokemon = allPokemons[randomIndex];

      if (!randomTeam.some((pokemon) => pokemon.name === randomPokemon.name)) {
        addToEnemyTeam(randomPokemon);
        randomTeam.push(randomPokemon);
      }
    }
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
  function usePokemonFighter(pokemon) {
    const fight = (defender) => {
      const damageMultiplier = Math.random() * 1.5;
      const baseDamage = Math.floor(Math.random() * pokemon.attack) + 1;
      const adjustedDamage = Math.round(baseDamage * damageMultiplier);
      const actualDamage = Math.max(0, adjustedDamage - defender.defense);
      return actualDamage;
    };

    const isAlive = () => {
      return pokemon.currentHp > 0;
    };

    return { fight, isAlive };
  }
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
      usePokemonFighter,
    }),
    [capturedPokemons, team, enemyTeam, allPokemons, setPokemonHp]
  );

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PokemonProvider };
