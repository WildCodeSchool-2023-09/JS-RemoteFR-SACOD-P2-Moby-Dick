import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="./accueil.mp4" type="video/mp4" />
      </video>
      <Link to="/Starter">
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
