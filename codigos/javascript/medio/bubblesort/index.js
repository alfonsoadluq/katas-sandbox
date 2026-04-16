function bubbleSort(arr){

    // Recorremos el array tantas veces como elementos tenga
    for (let i = 0; i < arr.length; i++) {
      // Recorremos el array desde el inicio hasta el final menos el número de iteraciones ya realizadas
      for (let j = 0; j < arr.length - 1 - i; j++) {

        // Si el elemento actual es menor que el siguiente, los intercambiamos
        if (arr[j] < arr[j + 1]) {
          let position = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = position;
        }

      }
    }

    return arr;
}

const array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array));
