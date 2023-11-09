import { Link } from "react-router-dom";

function Hub() {
  return (
    <div className="body">
      <div className="buttons-hub">
        <Link to="/arene" className="image-button" data-description="Arène 👑">
          <img src="arene-icon.png" alt="Arene" width={32} />
        </Link>
        <Link
          to="/pokecenter"
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
          to="/battle"
          className="image-button"
          data-description="Combat 🥊"
        >
          <img src="poing-icon.png" alt="Battle" width={32} />
        </Link>
        <Link
          to="/battlewild"
          className="image-button"
          data-description="Chasse 🌿"
        >
          <img src="herbe.png" alt="Battle" width={32} />
        </Link>
      </div>
    </div>
  );
}

export default Hub;
