import { Link } from "react-router-dom";

function Hub() {
  return (
    <div className="body">
      <div className="buttons-hub">
        <button
          type="button"
          className="image-button"
          data-description="Arène 👑"
        >
          <img src="arene-icon.png" alt="Arene" width={32} />
        </button>
        <Link
          to="/PokeCenter"
          className="image-button"
          data-description="Pokécenter ❤️"
        >
          <img src="pokecenter-icon.png" alt="Pokecenter" width={32} />
        </Link>
        <button
          type="button"
          className="image-button"
          data-description="Pokéshop 🛍️"
        >
          <img src="pokeshop-icon.png" alt="Pokeshop" width={32} />
        </button>
        <Link
          to="/Battle"
          className="image-button"
          data-description="Combat 🥊"
        >
          <img src="poing-icon.png" alt="Battle" width={32} />
        </Link>
      </div>
    </div>
  );
}

export default Hub;
