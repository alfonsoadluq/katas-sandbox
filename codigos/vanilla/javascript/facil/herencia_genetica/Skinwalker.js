import { Animal } from "./Animal.js";

export class Skinwalker extends Animal {
  #formaOculta;

  constructor(formaOculta) {
    super(formaOculta.especie, formaOculta.sonido); // Llama al constructor de Animal para inicializar especie y sonido, copiando los valores del animal que imita
    this.formaOculta = formaOculta;
  }

  get formaOculta() {
    return this.#formaOculta;
  }

  set formaOculta(formaOculta) {
    this.#formaOculta = formaOculta;
    // Actualiza la especie y el sonido del Skinwalker para que coincidan con el animal que imita
    this.especie = formaOculta.especie;
    this.sonido = formaOculta.sonido;
  }

  descripcion() {
    return `${this.formaOculta.descripcion()}, ¡ES UN ${this.constructor.name.toUpperCase()}!`;
  }
}
