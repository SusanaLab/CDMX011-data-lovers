//aqui controlan todo el dom
import data from './data/pokemon/pokemon.js';
import { filterType, filterName } from './data.js';



const pokemones=data.pokemon;

let htmlfinal=""

pokemones.forEach(unoauno=>{
htmlfinal+=generadordehtml(unoauno)
})

function generadordehtml(pokemoncito){
  return `<div class="box">
   <img src="${pokemoncito.img}" id="imgPoke">
   <h4>${pokemoncito.num}</h4>
   <h2></h2>
   <h1>${pokemoncito.name}</h1>
   <h3></h3>
   <h4>${pokemoncito.generation.name}</h4>
   <p><b>Type:  </b><br>${pokemoncito.type}</p>
   <p><b>Resistant:  </b><br>${pokemoncito.resistant} </p>
   <p><b>Weaknesses:  </b><br>${pokemoncito.weaknesses} </p>
   </div>`
}

document.getElementById("root").innerHTML=htmlfinal


//Aqui filtramos por tipo
const changeType = document.querySelector('.filter');

changeType.addEventListener('change', (event) => {
    const pokemonsFilter= filterType(pokemones,event.target.value)
    const htmlPokemons= pokemonsFilter.map((pokemoncito)=>
    `<div class="box">
    <img src="${pokemoncito.img}" id="imgPoke">
    <h4>${pokemoncito.num}</h4>
    <h2></h2>
    <h1>${pokemoncito.name}</h1>
    <h3></h3>
    <h4>${pokemoncito.generation.name}</h4>
    <p><b>Type:  </b><br>${pokemoncito.type}</p>
    <p><b>Resistant:  </b><br>${pokemoncito.resistant} </p>
    <p><b>Weaknesses:  </b><br>${pokemoncito.weaknesses} </p>
     </div>`)

    document.getElementById("root").innerHTML=htmlPokemons
});
//Orden Ascendente

console.log(filterName(pokemones.name))
