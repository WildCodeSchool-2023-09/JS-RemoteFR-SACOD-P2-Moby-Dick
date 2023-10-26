function NavBar() {
  return (
    <div className="navBar">
      <img className="logo" src="/logo.png" alt="logoPokemonWild" />
      <div className="buttons-container">
        <button className="navButton" type="button">
          Bouton 1
        </button>
        <button className="navButton" type="button">
          Button 2
        </button>
        <button className="navButton" type="button">
          Button 3
        </button>
      </div>
    </div>
  );
}

export default NavBar;
