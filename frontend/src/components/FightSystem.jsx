import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

function PokemonFighter({ pokemon }) {
  const fight = (defender, setDefenderHp) => {
    const damageMultiplier = Math.random() * 1.5;
    const baseDamage = Math.floor(Math.random() * pokemon.attack) + 1;
    const adjustedDamage = Math.round(baseDamage * damageMultiplier);
    const actualDamage = Math.max(0, adjustedDamage - defender.defense);
    const newDefenderHp = Math.max(0, defender.currentHp - actualDamage);
    setDefenderHp(newDefenderHp);
    return actualDamage;
  };

  const isAlive = () => {
    return pokemon.currentHp > 0;
  };

  return { fight, isAlive };
}

function FightSystem() {
  const { team, enemyTeam, generateEnemyTeam, setPokemonHp } =
    useContext(PokemonContext);
  const [battleLog, setBattleLog] = useState([]);

  const [currentPlayerPokemon, setCurrentPlayerPokemon] = useState(0);
  const [currentEnemyPokemon, setCurrentEnemyPokemon] = useState(0);

  const playerPokemon = PokemonFighter({ pokemon: currentPlayerPokemon });
  const enemyPokemon = PokemonFighter({ pokemon: currentEnemyPokemon });

  useEffect(() => {
    generateEnemyTeam();
    setCurrentPlayerPokemon(team[0]);
    setCurrentEnemyPokemon(enemyTeam[0]);
  }, [team, enemyTeam, generateEnemyTeam]);

  function getNextAlivePokemon() {
    return team.find((pokemon) => pokemon.currentHp > 0);
  }

  function handleAttack() {
    try {
      const damageToEnemy = playerPokemon.fight(
        currentEnemyPokemon,
        setPokemonHp
      );
      const newEnemyHp = Math.max(
        0,
        currentEnemyPokemon.currentHp - damageToEnemy
      );
      setPokemonHp(currentEnemyPokemon.name, newEnemyHp);

      const damageToPlayer = enemyPokemon.fight(
        currentPlayerPokemon,
        setPokemonHp
      );
      const newPlayerHp = Math.max(
        0,
        currentPlayerPokemon.currentHp - damageToPlayer
      );
      setPokemonHp(currentPlayerPokemon.name, newPlayerHp);

      setBattleLog((prevLog) => [
        ...prevLog,
        `${currentPlayerPokemon.name} 🤺 inflige ${damageToEnemy} dégâts à ${currentEnemyPokemon.name}`,
        `${currentEnemyPokemon.name} 🤺 inflige ${damageToPlayer} dégâts à ${currentPlayerPokemon.name}`,
      ]);

      if (!playerPokemon.isAlive()) {
        const nextPokemon = setCurrentPlayerPokemon;
        if (nextPokemon) {
          setCurrentPlayerPokemon(nextPokemon);
          setBattleLog((prevLog) => [
            ...prevLog,
            `${nextPokemon.name} entre dans l'arène !`,
          ]);
        } else {
          setBattleLog((prevLog) => [
            ...prevLog,
            `L'équipe ennemie gagne le combat !`,
          ]);
        }
      } else if (!enemyPokemon.isAlive()) {
        const nextEnemyPokemon = getNextAlivePokemon(enemyTeam.slice(1));
        if (nextEnemyPokemon) {
          setCurrentEnemyPokemon(nextEnemyPokemon);
          setBattleLog((prevLog) => [
            ...prevLog,
            `${nextEnemyPokemon.name} entre dans l'arène !`,
          ]);
        } else {
          setBattleLog((prevLog) => [
            ...prevLog,
            `Votre équipe gagne le combat !`,
          ]);
        }
      }
    } catch (error) {
      console.error("Une erreur est survenue lors du combat :", error);
    }
  }

  return (
    <div className="fightSystem">
      <div className="combatInfo">
        <div className="playerPokemon">
          <h3>{team[0].name}</h3>
          <img
            className="pokemonPlayer"
            src={team[0].imageUrlBack}
            alt="Pokemon player"
          />
          <progress max={team[0].hp} value={team[0].currentHp} />
          <span>
            HP: {team[0].currentHp}/{team[0].hp}
          </span>
        </div>
        {enemyTeam[0] && (
          <div className="enemyPokemon">
            <h3>{enemyTeam[0].name}</h3>
            <img
              className="pokemonWild"
              src={enemyTeam[0].imageUrl}
              alt="Pokemon enemy"
            />
            <progress max={enemyTeam[0].hp} value={enemyTeam[0].currentHp} />
            <span>
              HP: {enemyTeam[0].currentHp} / {enemyTeam[0].hp}
            </span>
          </div>
        )}
      </div>
      <div className="attackButton">
        <button type="button" onClick={handleAttack}>
          Attaquer
        </button>
      </div>
      <div className="battleLog">
        <h4>Journal de combat</h4>
        {battleLog.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </div>
  );
}

export default FightSystem;
