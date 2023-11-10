import React, { useState, useEffect } from "react";
import api from "../api";

const images = [
  "backgroundbeach",
  "backgroundearth",
  "backgroundforest",
  "backgroundsea",
  "backgroundgrass",
];
const trainers = [
  "dresseur19.png",
  "dresseur22.png",
  "dresseur23.png",
  "dresseur24.png",
];

function BattleArene() {
  const [selectedImage, setSelectedImage] = useState("backgroundsea");
  const [selectedTrainer, setSelectedTrainer] = useState("dresseur22");
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomTrainer = Math.floor(Math.random() * trainers.length);
    setSelectedImage(images[randomIndex]);
    setSelectedTrainer(trainers[randomTrainer]);
  }, []);

  return (
    <div className={`battle ${selectedImage}`}>
      {selectedTrainer && (
        <div>
          <img className="trainers" src={selectedTrainer} alt="Trainers" />
          <img className="pokemonWild" src={pokemonImage} alt="Pokemon" />
        </div>
      )}
    </div>
  );
}

export default BattleArene;
