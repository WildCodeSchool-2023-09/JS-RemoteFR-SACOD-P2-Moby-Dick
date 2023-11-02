import { Link } from "react-router-dom";

function Hub() {
  return (
    <div className="hub-container">
      <div className="body">
        <img src="./town.png" alt="Hub" />
        <div className="buttons-hub">
          <button
            type="button"
            className="image-button"
            data-description="Arène 👑"
          >
            <img src="arene-icon.png" alt="Arene" />
          </button>
          <Link
            to="/poke-center"
            className="image-button"
            data-description="Pokécenter ❤️"
          >
            <img src="pokecenter-icon.png" alt="Pokecenter" />
          </Link>
          <button
            type="button"
            className="image-button"
            data-description="Pokéshop 🛍️"
          >
            <img src="pokeshop-icon.png" alt="Pokeshop" />
          </button>
          <Link
            to="/Battle"
            className="image-button"
            data-description="Combat 🥊"
          >
            <img src="poing-icon.png" alt="Battle" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hub;
