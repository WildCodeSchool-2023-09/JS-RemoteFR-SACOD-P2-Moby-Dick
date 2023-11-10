import React, { useState, useEffect } from "react";
import api from "../api";

const images = [
  "backgroundbeach",
  "backgroundearth",
  "backgroundforest",
  "backgroundsea",
  "backgroundgrass",
];

function BattleWild() {
  const [selectedImage, setSelectedImage] = useState("backgroundsea");
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);

    const fetchPokemonData = async () => {
      try {
        const maxPokemon = 151;
        const randomId = Math.floor(Math.random() * maxPokemon) + 1;
        const response = await api.get(`/${randomId}`);
        const pokemonImageUrl = response.data.sprites.front_default;
        setPokemonImage(pokemonImageUrl);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du Pokémon",
          error
        );
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className={`battle ${selectedImage}`}>
      <img className="pokemonWild" src={pokemonImage} alt="Pokemon" />
    </div>
  );
}

export default BattleWild;
