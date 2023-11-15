import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

function PokeCenter() {
  const { team, setPokemonHp } = useContext(PokemonContext);

  const handleHeal = () => {
    team.forEach((pokemon) => {
      setPokemonHp(pokemon.name, pokemon.hp);
    });
  };

  return (
    <div className="PokeCenter">
      <p className="textPokeCenter">Bonjour, tu veux soigner tes Pokémons ?</p>
      <button onClick={handleHeal} className="healPokemonButton" type="button">
        Oui infirmière Joëlle !
      </button>
    </div>
  );
}

export default PokeCenter;
