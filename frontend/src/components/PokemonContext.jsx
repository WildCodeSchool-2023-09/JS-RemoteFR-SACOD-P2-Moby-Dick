import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [capturedPokemons, setCaptured] = useState({});
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemonToAdd) => {
    setTeam((prevTeam) => {
      if (
        prevTeam.length < 6 &&
        !prevTeam.some((p) => p.name === pokemonToAdd.name)
      ) {
        return [...prevTeam, pokemonToAdd];
      }
      return prevTeam;
    });
  };

  const removeFromTeam = (pokemonToRemove) => {
    setTeam((prevTeam) =>
      prevTeam.filter((p) => p.name !== pokemonToRemove.name)
    );
  };

  const value = useMemo(
    () => ({
      capturedPokemons,
      setCaptured,
      team,
      setTeam,
      addToTeam,
      removeFromTeam,
    }),
    [capturedPokemons, team]
  );

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PokemonProvider };
