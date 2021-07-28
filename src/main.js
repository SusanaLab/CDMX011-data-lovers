//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const pokemones=data.pokemon;

let htmlfinal=""

pokemones.forEach(unoauno=>{
htmlfinal+=generadordehtml(unoauno)
})

function generadordehtml(pokemoncito){
  return `<div class="box"> <img src="${pokemoncito.img}"> <h1>Name:${pokemoncito.name}</h1>
   <h2>Num:${pokemoncito.num}</h2> <p>Type:${pokemoncito.type}</p> <p>Resistan:${pokemoncito.resistant} </p> <p>Weaknesses:${pokemoncito.weaknesses} </p> </div>`
}

document.getElementById("root").innerHTML=htmlfinal
