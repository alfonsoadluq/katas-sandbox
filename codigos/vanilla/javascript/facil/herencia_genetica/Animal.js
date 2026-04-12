export class Animal {
    #especie;
    #sonido;

    constructor(especie, sonido) {
        this.#especie = especie;
        this.#sonido = sonido;
    }

    get especie() {
        return this.#especie;
    }

    set especie(especie) {

        if(typeof especie !== 'string') {
            throw new Error('La especie debe ser una cadena de texto');
        }

        this.#especie = especie;
    }

    get sonido() {
        return this.#sonido;
    }

    set sonido(sonido) {

        if(typeof sonido !== 'string') {
            throw new Error('El sonido debe ser una cadena de texto');
        }

        this.#sonido = sonido;
    }

    descripcion() {
        return `El ${this.especie} hace ${this.sonido}`;
    }
}