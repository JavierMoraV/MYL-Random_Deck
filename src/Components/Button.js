//import { useState } from "react";
import "../index.css";
import selectDeck from './razas.js'


function BotonRandom({ setRaza1, setRaza2, show }) {

  return (
    <div className="col-12 text-center">
      <button
        id="select-deck"
        className="btn btn-success text-center mt-5 mb-5"
        onClick={() => {
          selectDeck(1)
          show(`select-deck-again.show`);

        }}
      >
        Seleccionar Mazos
      </button>
    </div>
  );
}

export default BotonRandom;
