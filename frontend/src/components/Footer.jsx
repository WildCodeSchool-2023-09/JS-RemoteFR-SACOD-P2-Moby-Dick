import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <span>&copy;Pokémon Wild - </span>
        <Link to="/aboutus">
          <button type="button" className="transparent-button">
            P2 Moby Dick
          </button>
        </Link>
      </div>
      <img src="./logo_wcs.png" alt="WCS" />
    </footer>
  );
}
export default Footer;
