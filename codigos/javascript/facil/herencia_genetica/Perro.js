import { Animal } from "./Animal.js";

export class Perro extends Animal {
  #nombre;
  #raza;

  constructor(especie, sonido, nombre, raza) {
    super(especie, sonido);
    this.nombre = nombre;
    this.raza = raza;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    if (typeof nombre !== "string") {
      throw new Error("El nombre debe ser una cadena de texto");
    }
    this.#nombre = nombre;
  }

  get raza() {
    return this.#raza;
  }

  set raza(raza) {
    if (typeof raza !== "string") {
      throw new Error("La raza debe ser una cadena de texto");
    }
    this.#raza = raza;
  }
  
  descripcion() {
    return `${super.descripcion()}, se llama ${this.nombre} y es de raza ${this.raza}`;
  }
}