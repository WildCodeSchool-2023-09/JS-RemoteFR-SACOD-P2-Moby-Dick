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
        <button
          type="button"
          className="building-button"
          style={{ top: "14.8%", left: "46.5%" }}
        >
          .
        </button>
        <button
          type="button"
          className="building-button"
          style={{ top: "62.5%", left: "45.8%" }}
        >
          .
        </button>
        <button
          type="button"
          className="building-button"
          style={{ top: "58.59%", left: "21.2%" }}
        >
          .
        </button>
        <img src="./town.png" alt="Hub" />
      </div>
    </div>
  );
}
export default Hub;
