function Hub() {
  const pokemonList = [
    { name: "Pokemon 1", image: "/menupoke.png" },
    { name: "Pokemon 2", image: "/menupoke.png" },
    { name: "Pokemon 3", image: "/menupoke.png" },
    { name: "Pokemon 4", image: "/menupoke.png" },
    { name: "Pokemon 5", image: "/menupoke.png" },
    { name: "Pokemon 6", image: "/menupoke.png" },
  ];

  return (
    <div className="hub-container">
      <div className="menu">
        <ul className="menu-list">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name}>
              <img src={pokemon.image} alt={pokemon.name} />
              {pokemon.name}
            </li>
          ))}
          <li>
            <button type="button">
              <img src="./pokedex.png" alt="Pokedex" />
            </button>
          </li>
          <li>
            <button type="button">
              <img src="./sac.png" alt="Sac" />
            </button>
          </li>
        </ul>
      </div>
      <div className="body">
        <img src="./town.png" alt="Hub" />
        <div className="buttons-hub">
          <button type="button">
            <img src="arene-icon.png" alt="Arene" />
          </button>
          <button type="button">
            <img src="pokecenter-icon.png" alt="Pokecenter" />
          </button>
          <button type="button">
            <img src="pokeshop-icon.png" alt="Pokeshop" />
          </button>
          <button type="button">
            <img src="battle-icon2.png" alt="Combat" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hub;
