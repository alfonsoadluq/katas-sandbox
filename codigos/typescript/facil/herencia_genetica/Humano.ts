import { Animal } from "./Animal.ts";

export class Humano extends Animal {
  #nombre: string;

  constructor(especie: string, sonido: string, nombre: string) {
    super(especie, sonido);

    this.#validarDatos(nombre, "nombre");

    this.#nombre = nombre;
  }

  #validarDatos(dato: string, nombre: string) {
    if (!dato || dato.trim().length === 0) {
      throw new Error(
        `Error de validación: El campo '${nombre}' no puede estar vacío.`,
      );
    }

    if (typeof dato !== "string") {
      throw new TypeError(
        `Error de tipo: El campo '${nombre}' debe ser un texto.`,
      );
    }
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#validarDatos(nombre, "nombre");
    this.#nombre = nombre;
  }

  descripcion() {
    return `${super.descripcion()} se llama ${this.#nombre}`;
  }
}