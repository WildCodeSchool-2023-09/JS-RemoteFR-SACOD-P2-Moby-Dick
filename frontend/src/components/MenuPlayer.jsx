import { Link } from "react-router-dom";

function MenuPlayer() {
  const pokemonList = [
    { name: "Pokemon 1", image: "/menupoke.png" },
    { name: "Pokemon 2", image: "/menupoke.png" },
    { name: "Pokemon 3", image: "/menupoke.png" },
    { name: "Pokemon 4", image: "/menupoke.png" },
    { name: "Pokemon 5", image: "/menupoke.png" },
    { name: "Pokemon 6", image: "/menupoke.png" },
  ];

  return (
    <div className="menu">
      <ul className="menu-list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.image} alt={pokemon.name} />
            {pokemon.name}
          </li>
        ))}
        <li>
          <Link
            type="bouton"
            to="/Pokedex"
            className="image-button"
            data-description="Pokedex"
          >
            <img src="./pokedex.png" alt="Pokedex" />
          </Link>
          ;
        </li>
        <li>
          <button type="button">
            <img src="./sac.png" alt="Sac" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuPlayer;
