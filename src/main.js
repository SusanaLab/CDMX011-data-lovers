import data from './data/pokemon/pokemon.js';
import { filterType } from './data.js';

const pokemones = data.pokemon;

let htmlfinal=""

pokemones.forEach(unoauno=>{
htmlfinal+=generadordehtml(unoauno)
})

function generadordehtml(pokemoncito){
  return `<div class="box"> <img src="${pokemoncito.img}"> <h1>Name:${pokemoncito.name}</h1>
   <h2>Num:${pokemoncito.num}</h2> <p>Type:${pokemoncito.type}</p> <p>Resistant:${pokemoncito.resistant} </p> <p>Weaknesses:${pokemoncito.weaknesses} </p> </div>`
}

document.getElementById("root").innerHTML=htmlfinal

const changeType = document.querySelector('.filter');

changeType.addEventListener('change', (event) => {
    const pokemonsFilter= filterType(pokemones,event.target.value)
    const htmlPokemons= pokemonsFilter.map((pokemoncito)=>
    `<div class="box"> <img src="${pokemoncito.img}"> <h1>Name:${pokemoncito.name}</h1>
    <h2>Num:${pokemoncito.num}</h2> <p>Type:${pokemoncito.type}</p> <p>Resistant:${pokemoncito.resistant} </p> <p>Weaknesses:${pokemoncito.weaknesses} </p> </div>`)
    
    document.getElementById("root").innerHTML=htmlPokemons
});





/*console.log(filterType(pokemones,"fire"))
console.log(filterType(pokemones,"grass"))
console.log(filterType(pokemones,"poison"))
console.log(filterType(pokemones,"flying"))
console.log(filterType(pokemones,"water"))
console.log(filterType(pokemones,"bug"))
console.log(filterType(pokemones,"normal"))
console.log(filterType(pokemones,"electric"))
console.log(filterType(pokemones,"ground"))
console.log(filterType(pokemones,"figthing"))
console.log(filterType(pokemones,"psychic"))
console.log(filterType(pokemones,"ice"))
console.log(filterType(pokemones,"rock"))
console.log(filterType(pokemones,"dragon"))
console.log(filterType(pokemones,"fairy"))
console.log(filterType(pokemones,"steel"))
console.log(filterType(pokemones,"dark"))*/