function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video" preload="auto">
        <source src="frontend/media/pokemon wild.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Bienvenue à Pokemon Wild</h1>
        <p>Appuyez sur Jouer pour commencer l'aventure</p>
        <button type="button" className="play-button">
          Jouer
        </button>
      </div>
    </div>
  );
}

export default Home;
