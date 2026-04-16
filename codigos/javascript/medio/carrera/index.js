function Race(athleteActions, raceTrack) {
    let finalSection = ""; // Aquí se mostrará la pista final después de evaluar las acciones del atleta
    let won = true; // Por defecto es true hasta que cometa un error

    const rules = { // Creamos un objeto para definir las reglas de combinación entre acciones y secciones de la pista
      "run_": "_",
      "jump|": "|",
      "run|": "/",
      "jump_": "x",
    };

    const trackSections = [...raceTrack]; // Convertimos la pista en un array para facilitar la iteración

    trackSections.forEach((section, index) => {
        const action = athleteActions[index]; // Obtenemos la acción correspondiente a cada sección de la pista
        
        const attempt = `${action}${section}`; // Creamos una clave para buscar en las reglas de combinación, esto es lo que crea la key para el objeto rules, por ejemplo "run_" o "jump|"
        const result = rules[attempt] || "?"; // Obtenemos el resultado de la combinación acción-sección, o "?" si no es válida
        
        finalSection += result; // Agregamos el resultado a la pista final

        // Si el resultado no es ni el suelo normal ni la valla normal, perdió
        if (result !== "_" && result !== "|") {
            won = false;
        }

    });

    console.log(finalSection); // Imprimimos la pista resultante
    return won; // Retornamos si ganó o no
}

// Pruebas
console.log(Race(["run", "jump", "run", "jump", "run"], "_|_|_")); // true
console.log(Race(["run", "run", "run", "jump", "run"], "_|_|_")); // false
console.log(Race(["run", "jump", "jump", "jump", "run"], "_|_|_")); // false
