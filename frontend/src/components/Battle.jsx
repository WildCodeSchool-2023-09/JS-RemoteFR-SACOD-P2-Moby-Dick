import React, { useState, useEffect } from "react";

const images = [
  "background1.png",
  "background2.png",
  "background3.png",
  "background4.png",
  "background5.png",
  "background6.png",
  "background7.png",
  "background8.png",
  "background9.png",
];

function Battle() {
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

export default Battle;
