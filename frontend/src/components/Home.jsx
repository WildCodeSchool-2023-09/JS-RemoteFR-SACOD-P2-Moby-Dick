import React, { useState } from "react";

function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="./accueil.mp4" type="video/mp4" />
      </video>
      <div className="play-button">
        <img src="./pokeball.png" alt="play" />
      </div>
      <button type="button" onClick={toggleMusic} className="music-toggle">
        {isMusicPlaying ? "🔕" : "🎵"}
      </button>
      <audio autoPlay loop>
        {isMusicPlaying && <source src="./son-accueil.mp3" type="audio/mpeg" />}
        <track kind="captions" label="French" srcLang="fr" src="" default />
      </audio>
    </div>
  );
}

export default Home;
