const PERMITTED_POLYGONS = ['T', 'C', 'R']; // Array de polígonos permitidos para validar

function calculateArea(polygon) {
    const polygonLower = polygon.toUpperCase(); // Convertir a mayúsculas para comparación
    let error = false; // Variable para controlar si hubo un error en la entrada de datos
    let area;

    try {
        switch (polygonLower) { //Usamos switch en lugar de if debido a que solamente se usa un solo parámetro para determinar el tipo de polígono
            case 'T':
                const base = parseFloat(prompt("Ingrese la base del triángulo:")); // Convertimos el número a flotante para permitir decimales
                const height = parseFloat(prompt("Ingrese la altura del triángulo:"));
                // Verificamos que ambos valores sean números no NaN y que sean del tipo 'number'
                if (isNaN(base) || isNaN(height) || typeof base !== 'number' || typeof height !== 'number') {
                    error = true; // Si se cumple alguna de las condiciones, marcamos el error como verdadero
                    alert("Base y altura deben ser números válidos.");
                }
                area = (base * height) / 2;
                break;

            case 'C':
                const side = parseFloat(prompt("Ingrese el lado del cuadrado:")); // Convertimos el número a flotante para permitir decimales
                if (isNaN(side) || typeof side !== 'number') {
                    error = true;
                    alert("El lado debe ser un número válido.");
                }
                area = side ** 2;
                break;

            case 'R':
                const width = parseFloat(prompt("Ingrese la base del rectángulo:")); // Convertimos el número a flotante para permitir decimales
                const length = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                if (isNaN(width) || isNaN(length) || typeof width !== 'number' || typeof length !== 'number') {
                    error = true;
                    alert("Base y altura deben ser números válidos.");
                }
                area = width * length;
                break;
            
            // Si el polígono no es reconocido, mostramos un mensaje de error
            default:
                alert(`Polígono no soportado. Por favor ingrese uno de los siguientes: ${PERMITTED_POLYGONS.join(', ')}.`);
        }

            // Si no hubo errores, mostramos el área calculada
            if (!error) {
                alert(`El área del ${polygonLower} es: ${area}`);
            }
            return area; 
            
    } catch (error) {
        console.error("Error: " + error.message); // Capturamos cualquier error inesperado y lo mostramos en la consola
    }
}

let polygonType = prompt("Ingrese el tipo de polígono (T para Triángulo, C para Cuadrado, R para Rectángulo): ");
calculateArea(polygonType);