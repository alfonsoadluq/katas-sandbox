import { Animal } from "./Animal.js";

export class Skinwalker extends Animal {
  #formaOculta: Animal;

  constructor(victima: Animal) {
    if (!(victima instanceof Animal)) {
      throw new Error(
        "El Skinwalker necesita un Animal real para transformarse.",
      );
    }

    super(victima.especie, victima.sonido);

    this.#formaOculta = victima;
  }

  // Getter para ver a quién está imitando
  get formaOculta() {
    return this.#formaOculta;
  }

  set formaOculta(formaOculta) {
    if (!(formaOculta instanceof Animal)) {
      throw new Error("La nueva forma debe ser un Animal válido.");
    }
    this.#formaOculta = formaOculta;
    this.especie = formaOculta.especie;
    this.sonido = formaOculta.sonido;
  }

  descripcion() {
    return `${this.formaOculta.descripcion()}, ¡ES UN ${this.constructor.name.toUpperCase()}!`;
  }
}
