import heroe from "../images/razas/heroe.png";
import caballero from "../images/razas/caballero.png";
import defensor from "../images/razas/defensor.png";
import sacerdote from "../images/razas/sacerdote.png";
import olimpico from "../images/razas/olimpico.png";
import faraon from "../images/razas/faraon.png";
import titan from "../images/razas/titan.png";
import eterno from "../images/razas/eterno.png";

function selectDecks() {
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
  shuffleDecks();

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let mazos = []
  let mazo1 = randomNumberInRange(0, 7);
  mazos.push(decks[mazo1])
  decks.splice(mazo1, 1);
  let mazo2 = randomNumberInRange(0, 6);
  mazos.push(decks[mazo2])
  decks.splice(mazo2, 1);
  
  mazos.push(decks)
  console.log(mazos)
  return mazos
}
selectDecks();

export default selectDecks;
