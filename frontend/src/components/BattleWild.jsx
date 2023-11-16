import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "backgroundbeach",
  "backgroundearth",
  "backgroundforest",
  "backgroundsea",
  "backgroundgrass",
];

function Battle() {
  const [selectedImage, setSelectedImage] = useState("backgroundsea");

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomImageIndex]);
  }, []);

  return (
    <div className={`battle ${selectedImage}`}>
      <audio id="background-music" loop>
        <source src="./Battlesong" type="audio/mpeg" />
        <track kind="captions" label="French" srcLang="fr" src="" default />
      </audio>
      <Link to="/hub">
        <button type="button" className="battleButton" title="Fuir 🏃">
          <img src="fuir.png" alt="Hub" />
        </button>
      </Link>
    </div>
  );
}

export default Battle;
