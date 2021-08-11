import { filterType, sortA, sortZA } from '../src/data.js';

const typesPokemon =[
  { "name": "bulbasaur",
    "type": [
      "grass",
      "poison"]
  },

   {"name": "ivysaur",
    "type": [
        "grass",
        "poison"]
    },

    {"name": "venusaur",
      "type": [
        "grass",
        "poison"]
    }];

 
const names =  [
 
  {
  "num": "002",
  "name": "ivysaur",
  
  },
{
  "num": "003",
  "name": "venusaur",
  
  },
  {"num": "001",
  "name": "bulbasaur",
  
  } ];
 
describe('Regresa toda la data de pokemones', () => {
  it('no es nulo', () => {
     expect(pokemones).not.toBeNull();
  });
  it('Regresa toda la data de pokemones', () => {
    expect(pokemones).toHaveLenght(251);
  });
});


describe('returns type pokemon', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it(' This function should return the types of pokemon', () => {
   
    expect(filterType(typesPokemon, "grass")).toBe(typesPokemon); 
  });
});


describe('sortA', () => {
  it('is a function', () => {
    expect(typeof sortA).toBe('function');
  });
  it('returns an Array sorted by A-Z', () => {
    const orden = sortA(names);
    
      expect(orden[0].name).toBe("bulbasaur");
      expect(orden[1].name).toBe("ivysaur");
      expect(orden[2].name).toBe("venusaur");
  
  });
});

describe('sortA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });
  it('returns an Array sorted by Z-A', () => {
    const orden = sortZA(names);
    
    expect(orden[0].name).toBe("venusaur");
    expect(orden[1].name).toBe("ivysaur");
    expect(orden[2].name).toBe("bulbasaur");
  
  });
});
