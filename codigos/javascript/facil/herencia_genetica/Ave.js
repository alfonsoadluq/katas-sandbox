import { Animal } from "./Animal.js";

export class Ave extends Animal {
  #puedeVolar;

  constructor(especie, sonido, puedeVolar = true) {
    super(especie, sonido);
    this.puedeVolar = puedeVolar;
  }

  get puedeVolar() {
    return this.#puedeVolar;
  }

  set puedeVolar(valor) {
    if (typeof valor !== "boolean") {
      throw new TypeError(
        `Valor inválido: [${valor}]. Se esperaba un booleano.`,
      );
    }
    this.#puedeVolar = valor;
  }

  descripcion() {
    return `${super.descripcion()}, y ${this.#puedeVolar ? "puede volar" : "no puede volar"}`;
  }
}
