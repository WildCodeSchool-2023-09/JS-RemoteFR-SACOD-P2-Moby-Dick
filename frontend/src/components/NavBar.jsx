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
            Hub
          </button>
        </Link>
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
