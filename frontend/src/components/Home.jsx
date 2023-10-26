function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src="./accueil.mp4" type="video/mp4" />
      </video>
      <div className="play-button">
        <div className="play-icon">▷</div>
      </div>
    </div>
  );
}

export default Home;
