import fondo from './images/fondo.png'
import './App.css';
import Card from './Components/Cards'
import BotonRandom from './Components/Button'
import { useState } from 'react';
//import razas from './razas';



function App() {

  
  const [raza_1, setRaza1] = useState(fondo)
  const [raza_2, setRaza2] = useState(fondo)

  return (
    <div className="container">
      <div className="row">
        <BotonRandom setRaza1={setRaza1 } setRaza2={setRaza2}/>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            {/* jugador 1 */}
            <Card name="Jugador 1" imagen={raza_1}/>

            {/* VS */}
            <div className="align-self-center">
              <h1 id="versus" className="display-1">VS</h1>
            </div>

            {/* jugador 2 */}
            <Card name="Jugador 2" imagen={raza_2}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
