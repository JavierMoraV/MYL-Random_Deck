//import { useState } from "react";
import "../index.css";
import selectDecks from './razas.js'


function BotonRandom({ setRaza1, setRaza2, show }) {

  let mazos = selectDecks()
  return (
    <div className="col-12 text-center">
      <button
        id="select-deck"
        className="btn btn-success text-center mt-5 mb-5"
        onClick={() => {
          
          setRaza1(mazos[0]);
          setRaza2(mazos[1]);

          show(`select-deck-again.show`);

        }}
      >
        Seleccionar Mazos
      </button>
    </div>
  );
}

export default BotonRandom;
