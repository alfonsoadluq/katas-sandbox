type Character = {
  name: string;
  ability?: string;
  weapon?: string;
};

const createCharacter = (character: Character) => {
    const { name, ability = "Sin habilidades", weapon = "Espada" } = character;
    
    if(ability !== "Sin habilidades"){
        return `${name} tiene como habilidad ${ability} posee como arma ${weapon}`
    }
    return `${name} ${ability} y posee como arma ${weapon}`;
};

console.log(createCharacter({
    name:"Godzilla", 
    ability:"Aliento Atómico",
    weapon:"Cola"
}));

console.log(
  createCharacter({
    name: "Policía",
    weapon: "Pistola",
  }),
);

console.log(
  createCharacter({
    name: "Caballero",
  }),
);