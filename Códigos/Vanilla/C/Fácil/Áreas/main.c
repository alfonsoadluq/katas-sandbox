/*
 * Crea una única función que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo un polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
*/

#include <stdio.h>
#include <stdbool.h> // Para usar el tipo bool
#include <locale.h> // Para usar setlocale y permitir caracteres en español

const char PERMITTED_POLYGONS[] = {'T', 'C', 'R'};

double calculateArea(char polygonType) {
    double base, radio, height, area;
    bool error = false;

    switch (polygonType)
    {
    case 'T': // Calcular área de triángulo
        printf("Ingrese la base del triángulo:");
        scanf("%f", &base);

        printf("\n");

        printf("Ingrese la altura del triángulo:");
        scanf("%f", &height);

        if (base <= 0 || height <= 0) {
            printf("Error: La base y la altura deben ser números positivos.\n");
            error = true;
        } else {
            area = (base * height) / 2;
        }
        break;

    case 'C': // Calcular área de cuadrado
        printf("Ingrese el lado del cuadrado:");
        scanf("%f", &base);

        printf("\n");
        
        printf("Ingrese la altura del triángulo:");
        scanf("%f", &height);

        if (base <= 0 || height <= 0) {
            printf("Error: El lado del cuadrado debe ser un número positivo.\n");
            error = true;
        } else {
            area = base * base;
        }
        break;

    case 'R': // Calcular área de rectángulo
        printf("Ingrese la base del rectángulo:");
        scanf("%f", &base);

        printf("\n");

        printf("Ingrese la altura del rectángulo:");
        scanf("%f", &height);

        if (base <= 0 || height <= 0) {
            printf("Error: La base y la altura deben ser números positivos.\n");
            error = true;
        } else {
            area = base * height;
        }
        break;
    
    default:
        printf("Error: Polígono no permitido. Por favor, ingrese T, C o R.\n");
        error = true;
        break;
    }

    if (!error) {
        printf("El área del polígono es: %.2f\n", area);
    }
    return area;
}

int main(void) {
    setlocale(LC_ALL, "spanish"); // Configura la localización para permitir caracteres en español
    char polygonType;

    printf("Ingrese el tipo de polígono (T para Triángulo, C para Cuadrado, R para Rectángulo): ");
    scanf("%c", &polygonType); // Con %c leemos que el usuario ingresa un solo carácter, y &polygonType es la dirección de memoria donde se almacenará ese carácter



    return 0;
}