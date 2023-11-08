import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src="/logo.png" alt="logoPokemonWild" />
      </Link>
      <div className="buttons-container">
        <Link to="/Hub">
          <button className="navButton" type="button">
            <img src="home-icon.png" alt="Hub" />
          </button>
        </Link>
        <button className="navButton" type="button">
          <img src="compte.png" alt="Hub" />
        </button>
        <button className="navButton" type="button">
          <img src="dlc.png" alt="Hub" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
