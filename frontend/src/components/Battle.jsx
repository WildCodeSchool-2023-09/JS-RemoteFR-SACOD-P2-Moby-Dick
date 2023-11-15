import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const images = [
  "backgroundbeach",
  "backgroundearth",
  "backgroundforest",
  "backgroundsea",
  "backgroundgrass",
];
const trainers = [
  "dresseur1.png",
  "dresseur2.png",
  "dresseur3.png",
  "dresseur4.png",
  "dresseur5.png",
  "dresseur6.png",
  "dresseur7.png",
  "dresseur8.png",
  "dresseur9.png",
  "dresseur10.png",
  "dresseur11.png",
  "dresseur12.png",
  "dresseur13.png",
  "dresseur14.png",
  "dresseur15.png",
  "dresseur16.png",
  "dresseur17.png",
  "dresseur18.png",
  "dresseur19.png",
  "dresseur21.png",
  "dresseur22.png",
  "dresseur23.png",
  "dresseur24.png",
];

function Battle() {
  const [selectedImage, setSelectedImage] = useState("backgroundsea");
  const [selectedTrainer, setSelectedTrainer] = useState(null);
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
      <Link to="/hub">
        <button type="button" className="battleButton" title="Fuir 🏃">
          <img src="fuir.png" alt="Hub" />
        </button>
      </Link>
    </div>
  );
}

export default Battle;
