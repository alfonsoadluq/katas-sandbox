// Hacemos una promesa que se resuelve después de un tiempo determinado
const delay = (seconds) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const asyncSum = async (n1, n2, s) => {
    console.log(`Calculando suma... (espera de ${s}s)`);
    await delay(s); // Pausa la ejecución de esta función, ejecutando primero la promesa de delay
    return n1 + n2;
};

try {
    const n1 = 5, n2 = 6, s = 2;

    // Usamos await, diciendo que queremos esperar a que asyncSum termine antes de continuar
    const result = await asyncSum(n1, n2, s);

    console.log(`Resultado: ${result}`);
} catch (error) {
    console.error("Hubo un error:", error);
}