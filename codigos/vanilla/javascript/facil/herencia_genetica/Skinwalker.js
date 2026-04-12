import { Animal } from "./Animal.js";

export class Skinwalker extends Animal {
  #formaOculta;

  constructor(formaOculta) {
    super(formaOculta.especie, formaOculta.sonido);
    this.formaOculta = formaOculta;
  }

  get formaOculta() {
    return this.#formaOculta;
  }

  set formaOculta(formaOculta) {
    this.#formaOculta = formaOculta;
    this.especie = formaOculta.especie;
    this.sonido = formaOculta.sonido;
  }

  descripcion() {
    return `${this.formaOculta.descripcion()}, ¡ES UN ${this.constructor.name.toUpperCase()}!`;
  }
}
