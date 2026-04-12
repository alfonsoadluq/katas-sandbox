import { Animal } from "./Animal.js";

export class Perro extends Animal {
  #nombre;
  #raza;

  constructor(especie, sonido, nombre, raza) {
    super(especie, sonido);
    this.#nombre = nombre;
    this.#raza = raza;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get raza() {
    return this.#raza;
  }

  set raza(raza) {
    this.#raza = raza;
  }

  descripcion() {
    return `${super.descripcion()}, se llama ${this.nombre} y es de raza ${this.raza}`;
  }
}