import { Animal } from "./Animal.js";

export class Ave extends Animal {
  #puedeVolar;

  constructor(especie, sonido, puedeVolar = true) {
    super(especie, sonido);
    this.#puedeVolar = puedeVolar;
  }

  descripcion() {
    return `${super.descripcion()}, y ${this.#puedeVolar ? 'puede volar' : 'no puede volar'}`;
  }
}
