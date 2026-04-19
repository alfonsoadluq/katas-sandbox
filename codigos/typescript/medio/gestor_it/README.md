Estás creando el sistema de recursos humanos para una startup tecnológica. Tienes **diferentes tipos de empleados**, todos comparten **datos básicos**, pero tienen **habilidades y roles** completamente **distintos**.

## **Instrucciones**
- Crea un tipo `EmployeeBase` que contenga `id` (*número*), `name` (*string*) y `email` (*string*).
- Crea un tipo `Developer` que tenga la propiedad literal `role`: "**developer**" y un **array de strings languages**.
- Crea un tipo `Designer` que tenga la propiedad literal `role`: "**designer**" y un **array de strings software**.
- Crea dos nuevos tipos combinados usando intersección (&): `FullDeveloper` y `FullDesigner`, que unan los datos base con sus respectivos roles.
- Crea un tipo `StaffMember` que pueda ser un `FullDeveloper` O un `FullDesigner` (|).
- Crea una función llamada `printStaffDetails`(staff: StaffMember): void.
- Dentro de la función, usa la propiedad `role` para identificar qué tipo de empleado estás recibiendo.
- Si es `Developer`, imprime su nombre y los lenguajes que domina.
- Si es `Designer`, imprime su nombre y el software que utiliza.

* Crea un array de tipo `StaffMember[]` con al menos un desarrollador y un diseñador.
Recorre el array pasándolos por tu función.

### Datos de ejemplo para el array de empleados:
````ts
const myTeam: StaffMember[] = [
  {
    id: 1,
    name: "Alfonso",
    email: "alfonso@tech.com",
    role: "developer",
    languages: ["TypeScript", "JavaScript", "PHP"],
  },
  {
    id: 2,
    name: "Elena",
    email: "elena@design.com",
    role: "designer",
    software: ["Figma", "Illustrator"],
  },
];
````

## **Solución**
[**Pulse aquí**](index.ts)