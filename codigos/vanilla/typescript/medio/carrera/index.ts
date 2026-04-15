function Race(athleteActions: string[], raceTrack: string): boolean {
  let finalSection: string = ""; // Aquí se mostrará la pista final después de evaluar las acciones del atleta
  let won: boolean = true; // Por defecto es true hasta que cometa un error

  // Definimos el tipo del objeto rules para que acepte cualquier string como clave y valor
  const rules: Record<string, string> = {
    // Creamos un objeto para definir las reglas de combinación entre acciones y secciones de la pista
    "run_": "_",
    "jump|": "|",
    "run|": "/",
    "jump_": "x",
  };

  const trackSections: string[] = [...raceTrack];  // Convertimos la pista en un array para facilitar la iteración

  trackSections.forEach((section, index) => {
    const action: string = athleteActions[index]; // Obtenemos la acción correspondiente a cada sección de la pista

    const attempt: string = `${action}${section}`; // Creamos una clave para buscar en las reglas de combinación, esto es lo que crea la key para el objeto rules, por ejemplo "run_" o "jump|"
    const result: string = rules[attempt] || "?"; // Obtenemos el resultado de la combinación acción-sección, o "?" si no es válida

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
