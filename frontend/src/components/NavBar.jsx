import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src="/logo.png" alt="logoPokemonWild" />
      </Link>
      <div className="buttons-container">
        <Link to="/hub">
          <button
            type="button"
            className="navButton"
            data-description="Home 🏠"
          >
            <img src="home-icon.png" alt="Hub" />
          </button>
        </Link>
        <button
          type="button"
          className="navButton"
          data-description="Compte ✌️"
        >
          <img src="compte.png" alt="Hub" />
        </button>
        <button
          type="button"
          className="navButton"
          data-description="A venir 💫"
        >
          <img src="dlc.png" alt="Hub" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
