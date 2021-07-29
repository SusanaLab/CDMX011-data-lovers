//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


const pokemones=data.pokemon;

let htmlfinal=""

pokemones.forEach(unoauno=>{
htmlfinal+=generadordehtml(unoauno)
})

function generadordehtml(pokemoncito){
  return `<div class="box">
   <img src="${pokemoncito.img}">
   <h1>Num:${pokemoncito.num}</h1>
   <h1>Name:${pokemoncito.name}</h1>
   <p>Type:${pokemoncito.type}</p>
   <p>Resistan:${pokemoncito.resistant} </p>
   <p>Weaknesses:${pokemoncito.weaknesses} </p>
   </div>`
}

document.getElementById("root").innerHTML=htmlfinal

const arrayPokemonTypes = []

export const pokemonResistant = pokemones.map(function (pokemon) {

  // return pokemones.type}
 const pokemonType = pokemon.type.includes("fire");

 if (pokemon==true){
  arrayPokemonTypes.push (pokemonType)
 }
 console.log (arrayPokemonTypes)
 return arrayPokemonTypes
})



