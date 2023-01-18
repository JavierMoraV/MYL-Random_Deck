
import "../index.css"

function Card({name, imagen}) {
    return (
      <div className="player-1-wrapper text-center">
        
        <ul className="list-decks player-1">
          <li className="raza show">
            <h1>{name}</h1>
            <img src={imagen} alt="No se pudo cargar la imagenn"></img>
            <p>&nbsp;</p>
          </li>
        </ul>
        <button className="btn btn-success" data-player="player-1">
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    );
  }

  export default Card;