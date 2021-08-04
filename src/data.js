//Filtrado por tipo.
export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
                  return pokemones.type == typePokemon;
                 })
  return resultado
}
//Filtrado por nombre
export function filterName(pokemones,namePokemon){
  let resul=pokemones.filter(function(pokemones){
                  return pokemones.name == namePokemon;
                 })

  return resul
  console.log(resul)
}




export const changeOrder = (x, y) => {
  const myOrderList = x.sort((pokemonName1, pokemonName2) => {
    if (pokemonName1.name > pokemonName2.name) {
      const primer = x;
      return primer;
    }
    if (pokemonName1.name < pokemonName2.name) {
      const second = y;
      return second;
    }
    return 0;
  }); return myOrderList;
};


