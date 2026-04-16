export class Animal {
  #especie: string;
  #sonido: string;

  constructor(especie: string, sonido: string) {
    //
    this.#validarDatos(especie, "especie");
    this.#validarDatos(sonido, "sonido");

    this.#especie = especie;
    this.#sonido = sonido;
  }

  #validarDatos(dato: string, nombre: string){
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

  get especie() {
    return this.#especie;
  }

  set especie(especie) {
    this.#validarDatos(especie, "especie");
    this.#especie = especie;
  }

  get sonido() {
    return this.#sonido;
  }

  set sonido(sonido) {
    this.#validarDatos(sonido, "sonido");
    this.#sonido = sonido;
  }

  descripcion() {return `La especie ${this.especie} hace el sonido ${this.sonido}`}
}