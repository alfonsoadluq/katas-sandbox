import { Animal } from "./Animal.ts";

export class Perro extends Animal {
  #raza: string;
  #nombre: string;

  constructor(especie: string, sonido: string, raza: string, nombre: string) {
    super(especie, sonido);

    this.#validarDatos(raza, "raza");
    this.#validarDatos(nombre, "nombre");

    this.#raza = raza;
    this.#nombre = nombre;
  }

  #validarDatos(valor: string, campo: string) {
    if (!valor || valor.trim().length === 0) {
      throw new Error(`El campo '${campo}' del perro es obligatorio.`);
    }
  }

  get raza() {
    return this.#raza;
  }

  set raza(raza) {
    this.#validarDatos(raza, "raza");
    this.#raza = raza;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#validarDatos(nombre, "nombre");
    this.#nombre = nombre;
  }

  descripcion() {
    return `${super.descripcion()}. Específicamente es un ${this.#raza} llamado ${this.#nombre}.`;
  }
}