const MIN = 1, MAX = 100;

for(let i = MIN; i <= MAX; i++) {
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