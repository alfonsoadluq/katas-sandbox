function Race(athleteActions: string[], raceTrack: string): boolean {
  let finalSection: string = "";
  let won: boolean = true;

  const rules: Record<string, string> = {
    "run_": "_",
    "jump|": "|",
    "run|": "/",
    "jump_": "x",
  };

  const trackSections: string[] = [...raceTrack];

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
