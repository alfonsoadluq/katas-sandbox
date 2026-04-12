import { Animal } from "./Animal.js";

export class Humano extends Animal {
  #nombre;

  constructor(especie, sonido, nombre) {
    super(especie, sonido);
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  descripcion() {
    return `${super.descripcion()}, y se llama ${this.nombre}`;
  }
}
