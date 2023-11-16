import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

function CaptureSystem() {
  const {
    team,
    enemyTeam,
    generateEnemyTeam,
    setPokemonHp,
    capturedPokemons,
    setCaptured,
  } = useContext(PokemonContext);
  const [battleLog, setBattleLog] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);

  const [currentPlayerPokemonIndex, setCurrentPlayerPokemonIndex] = useState(0);

  function calculateDamage(attacker, defender) {
    const damageMultiplier = Math.random() * 0.6 + 1.2;
    const baseDamage = Math.floor(Math.random() * attacker.attack) + 10;
    const adjustedDamage = Math.round(baseDamage * damageMultiplier);
    const actualDamage = Math.max(10, adjustedDamage - defender.defense);
    return actualDamage;
  }

  useEffect(() => {
    generateEnemyTeam();
  }, [generateEnemyTeam]);

  const currentPlayerPokemon = team[currentPlayerPokemonIndex];
  const currentEnemyPokemon = enemyTeam[0];

  const handleNextPokemon = (currentIndex, setCurrentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < team.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsGameOver(true);
      setBattleLog((prevLog) => [
        ...prevLog,
        "Tous vos Pokémon sont vaincus ! Vous avez perdu !",
      ]);
    }
  };

  function handleAttack() {
    if (!currentPlayerPokemon || !currentEnemyPokemon || isGameOver) return;

    const damageToEnemy = calculateDamage(
      currentPlayerPokemon,
      currentEnemyPokemon
    );
    const newEnemyHp = Math.max(
      1,
      currentEnemyPokemon.currentHp - damageToEnemy
    );
    setPokemonHp(currentEnemyPokemon.name, newEnemyHp);

    const damageToPlayer = calculateDamage(
      currentEnemyPokemon,
      currentPlayerPokemon
    );
    const newPlayerHp = Math.max(
      0,
      currentPlayerPokemon.currentHp - damageToPlayer
    );
    setPokemonHp(currentPlayerPokemon.name, newPlayerHp);

    setBattleLog((prevLog) => [
      ...prevLog,
      `${currentPlayerPokemon.name} inflige ${damageToEnemy} dégâts à ${currentEnemyPokemon.name}`,
      `${currentEnemyPokemon.name} inflige ${damageToPlayer} dégâts à ${currentPlayerPokemon.name}`,
    ]);

    setIsPlayerAttacking(true);
    setIsEnemyAttacking(true);

    setTimeout(() => {
      setIsPlayerAttacking(false);
      setIsEnemyAttacking(false);
    }, 300);

    if (newPlayerHp <= 0) {
      handleNextPokemon(
        currentPlayerPokemonIndex,
        setCurrentPlayerPokemonIndex
      );
    }

    if (newEnemyHp <= 1) {
      setIsGameOver(true);
      if (newPlayerHp <= 0) {
        handleNextPokemon(
          currentPlayerPokemonIndex,
          setCurrentPlayerPokemonIndex
        );
      }

      if (newEnemyHp <= 1) {
        setCaptured((prevCaptured) => ({
          ...prevCaptured,
          [currentEnemyPokemon.name]: true,
        }));
        setBattleLog((prevLog) => [
          ...prevLog,
          `Vous avez affaibli ${currentEnemyPokemon.name} ! Il est capturé et ajouté à votre Pokédex.`,
        ]);
      }
    }
  }

  return (
    <div className="fightSystem">
      <div className="combatInfo">
        <div className="playerPokemon">
          <h3>{currentPlayerPokemon ? currentPlayerPokemon.name : ""}</h3>
          {currentPlayerPokemon && (
            <>
              <img
                className={`pokemonPlayer ${
                  isPlayerAttacking ? "animate-attack-right" : ""
                }`}
                src={currentPlayerPokemon.imageUrlBack}
                alt="Pokemon player"
              />
              <progress
                max={currentPlayerPokemon.hp}
                value={currentPlayerPokemon.currentHp}
              />
              <span>
                HP: {currentPlayerPokemon.currentHp}/{currentPlayerPokemon.hp}
              </span>
            </>
          )}
        </div>
        {currentEnemyPokemon && (
          <div
            className={`enemyPokemon ${
              capturedPokemons[currentEnemyPokemon.name] ? "captured" : ""
            }`}
          >
            <h3>{currentEnemyPokemon.name}</h3>
            <img
              className={`pokemonWild ${
                isEnemyAttacking ? "animate-attack-left" : ""
              }`}
              src={currentEnemyPokemon.imageUrl}
              alt="Pokemon enemy"
            />
            {capturedPokemons[currentEnemyPokemon.name] && (
              <span>Capturé!</span>
            )}
            <progress
              max={currentEnemyPokemon.hp}
              value={currentEnemyPokemon.currentHp}
            />
            <span>
              HP: {currentEnemyPokemon.currentHp} / {currentEnemyPokemon.hp}
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

export default CaptureSystem;
