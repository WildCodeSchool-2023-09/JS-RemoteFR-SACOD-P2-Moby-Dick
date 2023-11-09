import React, { useState, useEffect } from "react";

const trainers = [
  "dresseur19.png",
  "dresseur22.png",
  "dresseur23.png",
  "dresseur24.png",
];

function Arene() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    const randomTrainer = Math.floor(Math.random() * trainers.length);
    setSelectedTrainer(trainers[randomTrainer]);
  }, []);

  return (
    <div className="arene">
      {selectedTrainer && (
        <img className="trainersArene" src={selectedTrainer} alt="Trainers" />
      )}
      <p className="textArene">Sois le bienvenu jeune dresseur !</p>
      <button className="areneButton" type="button">
        A l'attaque !
      </button>
    </div>
  );
}

export default Arene;
