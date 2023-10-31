function PokeCenter() {
  return (
    <div className="PokeCenter">
      <img className="pokeCenterImg" src="./pokecenter.png" alt="pokeCenter" />
      <p className="textPokeCenter">Bonjour, tu veux soigner tes Pokemon ?</p>
      <button className="healPokemonButton" type="button">
        Oui infirmière Joël !
      </button>
      <img className="joel" src="./infermiereJoel.png" alt="Joel" />
    </div>
  );
}

export default PokeCenter;
