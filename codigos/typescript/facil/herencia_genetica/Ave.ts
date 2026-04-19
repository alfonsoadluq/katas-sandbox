import { Animal } from "./Animal.js";

export class Ave extends Animal {
  #puedeVolar: boolean;

  constructor(especie: string, sonido:string, puedeVolar:boolean=true) {
    super(especie, sonido);

    this.#validarDatos(puedeVolar, "puedeVolar");

    this.#puedeVolar = puedeVolar
  }

  #validarDatos(valor: boolean, campo: string) {
    if (typeof valor !== "boolean") {
      throw new TypeError(`El campo '${campo}' debe ser un valor booleano (true/false).`);
    }
  }

  get puedeVolar() {
    return this.#puedeVolar;
  }

  set puedeVolar(puedeVolar) {
    this.#validarDatos(puedeVolar, "puedeVolar");
    this.#puedeVolar = puedeVolar;
  }

  descripcion() {
    return `${super.descripcion()}. Además, esta ave ${this.#puedeVolar ? "puede volar" : "no puede volar"}`;
  }
}