import React, { useState, useEffect } from "react";

const images = [
  "backgroundbeach.png",
  "backgroundearth.png",
  "backgroundforest.png",
  "backgroundsea.png",
  "backgroundgrass.png",
];

function BattleWild() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, []);

  return (
    <div className="Battle">
      {selectedImage && (
        <img className="battleGround" src={selectedImage} alt="Battleground" />
      )}
    </div>
  );
}

export default BattleWild;
