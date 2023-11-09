import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const trainers = [
  "dresseur19.png",
  "dresseur22.png",
  "dresseur23.png",
  "dresseur24.png",
];

function Arene() {
  const [selectedTrainer, setSelectedTrainer] = useState("dresseur22");

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
      <Link to="/battlearene" className="areneButton" type="button">
        A l'attaque !
      </Link>
    </div>
  );
}

export default Arene;
