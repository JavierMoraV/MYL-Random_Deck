import { useState } from "react";
import "../index.css";
import "./Button";
import selectDecks from './razas.js'

function Card({ name, imagen, show, setRaza1, setRaza2 }) {
  //const [otroMazo, setOtroMazo] = useState(null)
  return (
    <div className="player-1-wrapper text-center">
      <ul className="list-decks player-1">
        <li className="raza show">
          <h1>{name}</h1>
          <img src={imagen} alt="No se pudo cargar la imagen"></img>
          <p>&nbsp;</p>
        </li>
      </ul>
      <button
        className={`btn btn-success ${show}`}
        data-player="player-1"
        onClick={() => {
          let mazoRestante = selectDecks();
          setRaza1(mazoRestante[2][0])
          setRaza2(mazoRestante[2][1])
          
        }}
      >
        <i className="fa-solid fa-arrows-rotate">Cambiar</i>
      </button>
    </div>
  );
}

export default Card;
