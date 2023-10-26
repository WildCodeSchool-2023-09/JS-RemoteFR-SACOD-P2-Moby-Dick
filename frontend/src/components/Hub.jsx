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
            <img src="./pokedex.png" alt="Pokedex" />
          </li>
          <li>
            <img src="./sac.png" alt="Sac" />
          </li>
        </ul>
      </div>
      <div className="body">
        <img src="./town.png" alt="Hub" />
      </div>
    </div>
  );
}
export default Hub;
