import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

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

function Battle() {
  const [selectedImage, setSelectedImage] = useState("backgroundsea");
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { randomPokemon } = useContext(PokemonContext);

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomTrainerIndex = Math.floor(Math.random() * trainers.length);
    setSelectedImage(images[randomImageIndex]);
    setSelectedTrainer(trainers[randomTrainerIndex]);
  }, []);

  return (
    <div className={`battle ${selectedImage}`}>
      {selectedTrainer && (
        <div>
          <img className="trainers" src={selectedTrainer} alt="Trainers" />
          {randomPokemon && (
            <img
              className="pokemonWild"
              src={randomPokemon.imageUrl}
              alt={randomPokemon.name}
            />
          )}
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
