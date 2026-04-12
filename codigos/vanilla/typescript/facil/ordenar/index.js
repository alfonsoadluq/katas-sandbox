/**
 * Escribe una función que devuelva una cadena con las letras ordenadas alfabéticamente.
 * Cadena de ejemplo: «webmaster»
 * Resultado esperado: «abeemrstw»
 */

function orderLetters(string) {
    return [...string].sort().join(""); // El operador spread convierte la cadena en un array de caracteres, luego se ordena con la función sort() y finalmente se une de nuevo en una cadena con la función join("").
}

let string = "webmaster";

console.log(orderLetters(string));