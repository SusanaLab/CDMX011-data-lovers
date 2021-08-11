//Filtrado por tipo.
export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
    return pokemones.type == typePokemon;
  })
  console.log(resultado);
     return resultado
}

export function filterRe(pokemones,rePokemon){
  let resultado=pokemones.filter(function(pokemones){
    return pokemones.resistant == rePokemon;
  })
      return(resultado.lenght) 
}


//traemos el arreglo nombres
//Ordenamos de forma Z-A
export function sortZA (pokemones){
  const sortedPokemons = pokemones.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1
    }
      return 0;
  });
  
       return sortedPokemons 
}
  

//Ordenamos de forma A-Z
export function sortA (pokemones) {
  let ordenaAscend = pokemones.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
      return 0;
  });
        return ordenaAscend 
}
//Esta es nuestra funcion de estadistica
/*export function statistics (pokemones){
    const arrayKanto =[];
    const arrayJohto = [];

    const region = pokemones.generation.name;
    const letString= region.split()

     for(let i=0; i <letString.lenght; i++){
    
      if (letString ===  "kanto") {
          arrayKanto.push(letString)
      }
      else  {
         arrayJohto.push(letString)
      }
    }
       return arrayJohto
  };
 
  const percent1 = arrayJohto.lenght*100
  const percent2 = arrayKanto.lenght*100

  document.getElementById ("kanto") = "En esta seccion se muestra " + percent1 + " de pokemones de Kanto ";
  document.getElementById ("johto") = "En esta seccion se muestra " + percent2 + "de pokemones de Kanto  ";
*/


/*export function statistics (resultado){
    
    let arrayKanto =0;
    let arrayJohto =0;

     for( let i=0; i<resultado.lenght; i++){
       if (resultado[i].generation.name == "kanto"){
         arrayKanto = arrayKanto +1;
       }
      else if (resultado[i].generation.name== "johto"){
        arrayJohto = arrayJohto +1;
    }
    return arrayKanto.length
   }
  }
  alert(arrayKanto);*/

  
