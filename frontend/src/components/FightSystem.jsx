import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import { PokemonContext } from "./PokemonContext";

function FightSystem() {
  const { team, enemyTeam, generateEnemyTeam, setPokemonHp } =
    useContext(PokemonContext);
  const [battleLog, setBattleLog] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);

  const [currentPlayerPokemonIndex, setCurrentPlayerPokemonIndex] = useState(0);
  const [currentEnemyPokemonIndex, setCurrentEnemyPokemonIndex] = useState(0);

  const battleLogRef = useRef(null);

  const scrollToBottom = () => {
    if (battleLogRef.current) {
      battleLogRef.current.scrollTop = battleLogRef.current.scrollHeight;
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [battleLog]);

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
  const currentEnemyPokemon = enemyTeam[currentEnemyPokemonIndex];

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
      0,
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

    if (newEnemyHp <= 0) {
      const nextEnemyIndex = currentEnemyPokemonIndex + 1;
      if (nextEnemyIndex < enemyTeam.length) {
        setCurrentEnemyPokemonIndex(nextEnemyIndex);
      } else {
        setIsGameOver(true);
        setBattleLog((prevLog) => [
          ...prevLog,
          "Vous avez vaincu tous les Pokémon adverses ! Vous avez gagné !",
        ]);
      }
    }
  }

  return (
    <div className="fightSystem">
      <div className="combatInfo">
        <div className="playerPokemon">
          <div className="namePlayer">
            <h3>{currentPlayerPokemon ? currentPlayerPokemon.name : ""}</h3>
          </div>{" "}
          {currentPlayerPokemon && (
            <>
              <img
                className={`pokemonPlayer ${
                  isPlayerAttacking ? "animate-attack-right" : ""
                }`}
                src={currentPlayerPokemon.imageUrlBack}
                alt="Pokemon player"
              />
              <div className="progressContainerPlayer">
                <progress
                  max={currentPlayerPokemon.hp}
                  value={currentPlayerPokemon.currentHp}
                />
                <span>
                  HP: {currentPlayerPokemon.currentHp}/{currentPlayerPokemon.hp}
                </span>
              </div>
            </>
          )}
        </div>
        {currentEnemyPokemon && (
          <div className="enemyPokemon">
            <div className="nameEnemy">
              <h3>{currentEnemyPokemon.name}</h3>
            </div>{" "}
            <img
              className={`pokemonWild ${
                isEnemyAttacking ? "animate-attack-left" : ""
              }`}
              src={currentEnemyPokemon.imageUrl}
              alt="Pokemon enemy"
            />
            <div className="progressContainerEnemy">
              <progress
                max={currentEnemyPokemon.hp}
                value={currentEnemyPokemon.currentHp}
              />
              <span>
                HP: {currentEnemyPokemon.currentHp} / {currentEnemyPokemon.hp}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="attackButton">
        <button type="button" onClick={handleAttack}>
          <img src="/katana2.png" alt="Attaquer" />
        </button>
      </div>
      <div className="battleLog" ref={battleLogRef}>
        <h4>Journal de combat</h4>
        {battleLog.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </div>
  );
}

export default FightSystem;
