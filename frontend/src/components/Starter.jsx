import { Link } from "react-router-dom";

function Starter() {
  return (
    <div className="starter-container">
      <p className="choix-pokemon">
        Cliquer sur une pokeball pour le pokemon que vous voulez
      </p>
      <div className="buttons-starter">
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE EAU 💧"
        >
          <img src="carapuce.png" alt="Carapuce" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE PLANTE 🌿"
        >
          <img src="bulbizarre.png" alt="bulbasaur" />
        </Link>
        <Link
          to="/hub"
          type="button"
          className=".starter-image"
          data-description="TYPE FEU 🔥"
        >
          <img src="salameche.png" alt="Salameche" />
        </Link>
      </div>
    </div>
  );
}

export default Starter;
