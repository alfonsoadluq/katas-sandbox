import { Animal } from "./Animal.js";

export class Skinwalker extends Animal {
  #formaOculta: Animal;

  constructor(formaOculta: Animal) {
    Skinwalker.#validarVictima(formaOculta);

    super(formaOculta.especie, formaOculta.sonido);
    this.#formaOculta = formaOculta;
  }

  get formaOculta(): Animal {
    return this.#formaOculta;
  }

  set formaOculta(nuevaForma: Animal) {
    Skinwalker.#validarVictima(nuevaForma);

    this.#formaOculta = nuevaForma;
    this.especie = nuevaForma.especie;
    this.sonido = nuevaForma.sonido;
  }

  static #validarVictima(victima: any) {
    if (!victima || typeof victima.descripcion !== "function") {
      throw new Error(
        "El Skinwalker necesita un Animal real para transformarse (debe tener el método descripción).",
      );
    }
  }

  descripcion(): string {
    const imitacion = this.#formaOculta.descripcion();
    const miNombre = (this.constructor as any).name.toUpperCase();

    return `${imitacion}, ¡ES UN ${miNombre}! 💀`;
  }
}
