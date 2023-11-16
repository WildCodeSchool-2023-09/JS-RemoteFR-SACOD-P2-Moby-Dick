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
      <Link to="/hub">
        <button type="button" className="battleButton" title="Fuir 🏃">
          <img src="fuir.png" alt="Hub" />
        </button>
      </Link>
    </div>
  );
}

export default Battle;
