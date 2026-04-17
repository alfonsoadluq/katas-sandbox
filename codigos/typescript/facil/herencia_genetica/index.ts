import { Perro } from "./Perro.js";
import { Ave } from "./Ave.js";
import { Humano } from "./Humano.js";
import { Skinwalker } from "./Skinwalker.js";

const perro = new Perro("Perro", "¡Guau, guau!", "Gran Danés", "Max");
const ave = new Ave("Pingüino", "¡Cuaaak!", false);
const humano = new Humano("Humano", "¡Hola Mundo!", "Alfonso");
const impostor = new Skinwalker(humano);

console.log("--- MOSTRANDO DESCRIPCIONES ---");
console.log(perro.descripcion());
console.log(ave.descripcion());
console.log(humano.descripcion());

console.log("\n--- Comportamiento sospechoso ---");
console.log(impostor.descripcion());

console.log("\n--- EL SKINWALKER CAMBIA DE FORMA ---");
impostor.formaOculta = perro; // Ahora imita al perro
console.log(impostor.descripcion());
