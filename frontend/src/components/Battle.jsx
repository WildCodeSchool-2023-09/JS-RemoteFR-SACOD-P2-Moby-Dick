import React from "react";

const battleGroundImages = [
  "battlegroundbeach.jpg",
  "battlegroundbrown.jpg",
  "battlegroundcavern.jpg",
  "battlegroundearth.jpg",
  "battlegroundgrass.jpg",
  "battlegroundgrass2.jpg",
  "battlegroundsand.jpg",
  "battlegroundsnow.jpg",
  "battlegroundwater.jpg",
];

function Battle() {
  const randomBattleImage =
    battleGroundImages[Math.floor(Math.random() * battleGroundImages.length)];

  return (
    <div className="Battle">
      <img
        className="ImgBattle"
        src={randomBattleImage}
        alt="random battleground"
      />
    </div>
  );
}

export default Battle;
