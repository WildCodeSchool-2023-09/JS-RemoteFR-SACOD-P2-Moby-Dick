import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";
import api from "../api";

function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);

    const audioElement = document.getElementById("background-music");
    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };
  const [loading, setLoading] = useState(true);

  const { capturedPokemons, setCaptured, setAllPokemons } =
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
        setCaptured(capturedPokemons);
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
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="./accueil.mp4" type="video/mp4" />
      </video>
      <Link to="/starter">
        <div className="play-button">
          <img src="./pokeball.png" alt="play" />
        </div>
      </Link>
      <button type="button" onClick={toggleMusic} className="music-toggle">
        {isMusicPlaying ? "🔕" : "🎵"}
      </button>
      <audio id="background-music" loop>
        <source src="./Generique.mp3" type="audio/mpeg" />
        <track kind="captions" label="French" srcLang="fr" src="" default />
      </audio>
    </div>
  );
}

export default Home;
