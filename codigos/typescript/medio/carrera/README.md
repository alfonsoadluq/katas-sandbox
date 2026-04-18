## Descripción

Crea una función que evalúe si un atleta supera una pista según sus acciones.

La función debe recibir:
- Un array con las acciones (`"run"` / `"jump"`)
- Un string con la pista (`"_"` o `"|"`)


> [!Tip] Reglas de la carrera:
> `run` + `_` ➔ `_` (Correcto)  
> `jump` + `|` ➔ `|` (Correcto)  
> `run` + `|` ➔ `/` (Fallo: correr en valla)  
> `jump` + `_` ➔ `x` (Fallo: saltar en suelo)


> [!Tip] Requisitos:
> - La función debe retornar un string con el resultado de cada acción concatenado.
> - El resultado de cada acción se determina por la combinación de la acción y el tipo de pista.
> - El resultado final es una cadena que representa el desempeño del atleta en la pista. 

## **Solución**
[Pulsa aquí](index.ts)