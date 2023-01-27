import heroe from "../images/razas/heroe.png";
import caballero from "../images/razas/caballero.png";
import defensor from "../images/razas/defensor.png";
import sacerdote from "../images/razas/sacerdote.png";
import olimpico from "../images/razas/olimpico.png";
import faraon from "../images/razas/faraon.png";
import titan from "../images/razas/titan.png";
import eterno from "../images/razas/eterno.png";

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const shuffleDecks = (decks) => {
  shuffle(decks);
  shuffle(decks);
  shuffle(decks);
};

b();
//a();
//c();

const randomNumberInRange = (min, max) => {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DECKS = [
  heroe,
  caballero,
  defensor,
  sacerdote,
  olimpico,
  faraon,
  titan,
  eterno,
];

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

  //function shuffle
  
  shuffleDecks(decks);

  let clonDecks = [...decks];

  console.log({decks, clonDecks});

  let mazos = []
  let mazo1 = randomNumberInRange(0, clonDecks.length);

  mazos.push(decks[mazo1])
  clonDecks.splice(mazo1, 1);
  let mazo2 = randomNumberInRange(0, clonDecks.length);
  mazos.push(decks[mazo2])
  clonDecks.splice(mazo2, 1);
  
  mazos.push(decks)
  console.log(mazos)
  return mazos
}

let player1 = -1;
let player2 = -1;

let clonDecks = [];

shuffleDecks(clonDecks);

function selectDeck(whichPlayer) {

  let currentPlayerIndex = -1;
  if (whichPlayer === 1) {
    clonDecks = [...DECKS];
    currentPlayerIndex = player1;
  } else
    currentPlayerIndex = player2;

  console.log({clonDecks, DECKS});

  let player = -1;

  do {
    player = randomNumberInRange(0, (clonDecks.length - 1));  
  } while (player === currentPlayerIndex)

  console.log({whichPlayer, player});

  if (whichPlayer === 1) {
    player1 = player;
  } else
    player2 = player;
  
  console.log({selectedDeck: clonDecks[player]});

  // let mazo2 = randomNumberInRange(0, clonDecks.length);
  // mazos.push(decks[mazo2])
  // clonDecks.splice(mazo2, 1);
  
  // mazos.push(decks)
  // console.log(mazos)
}

//selectDecks();

//export default selectDecks;
export default selectDeck;

const a = () => {
  console.log('hola a');
}

function b() {
  console.log('hola b');
}

const c = function() {
  console.log('hola c');
}

a()
b()
c()