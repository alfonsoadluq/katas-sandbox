/*
 * Escribe un programa que muestre por consola los
 * números de 1 a 100, sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/
const MIN = 1, MAX = 100;

for (let i = MIN; i <= MAX; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else { // Si no es múltiplo de 3 ni de 5 se muestra el número
        console.log(i); // Sin esto siempre se mostraría el nº aunque se sustituyera por "fizz", "buzz" o "fizzbuzz"
    }
}