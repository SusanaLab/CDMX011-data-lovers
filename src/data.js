// estas funciones son de ejemplo


//Get types
export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
                  return pokemones.type == typePokemon;
  } )
  return resultado
}

//Get resistant
export function filterResistant(pokemones, resistantPokemon){
    let resultado=pokemones.filter(function(pokemones){
                    return pokemones.resistant == resistantPokemon;
  })
   return resultado
}

//Get weaknesses
export function filterWeaknesses(pokemones, weaknessesPokemon){
  let resultado=pokemones.filter(function(pokemones){
                  return pokemones.weaknesses == weaknessesPokemon;
})
 return resultado
}

//Get "special-attack"
export function filterSpecialAttack(pokemones, SpecialAttackPokemon){
  let resultado=pokemones.filter(function(pokemones){
                  return pokemones.SpecialAttack == SpecialAttackPokemon;
})
 return resultado
}


export function filterByName(pokemones, namePokemon){

let result = pokemones.filter(function(pokemones){ 
             return pokemones.Name == Name;
})
return result
}
