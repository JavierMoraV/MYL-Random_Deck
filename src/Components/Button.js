//import { useState } from "react";

import "../index.css";
import heroe from "../images/razas/heroe.png";
import caballero from "../images/razas/caballero.png";
import defensor from "../images/razas/defensor.png";
import sacerdote from "../images/razas/sacerdote.png";
import olimpico from "../images/razas/olimpico.png";
import faraon from "../images/razas/faraon.png";
import titan from "../images/razas/titan.png";
import eterno from "../images/razas/eterno.png";

function BotonRandom({ setRaza1 , setRaza2}) {
  let decks = [
    heroe,
    caballero,
    defensor,
    sacerdote,
    olimpico,
    faraon,
    titan,
    eterno,
  ];

  const shuffleDecks = () => {
    shuffle(decks);
    shuffle(decks);
    shuffle(decks);
  };
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffleDecks()


  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="col-12 text-center">
      <button
        id="select-deck"
        className="btn btn-success text-center mt-5 mb-5"
        onClick={() => {
          let mazo1 = randomNumberInRange(0,7)
          setRaza1(decks[mazo1]);
          decks.splice(mazo1, 1)
          //console.log(decks.length, decks)
          let mazo2 = randomNumberInRange(0,6)
          setRaza2(decks[mazo2]);
        }}
      >
        Seleccionar Mazos
      </button>
    </div>
  );
}

export default BotonRandom;
