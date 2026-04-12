## **Descripción:**  
Escribe un programa en JavaScript que aplique los conceptos de **Clases, Herencia y Polimorfismo**. Todo deberá estar contenido en un solo archivo `index.js`. 

El programa debe incluir una clase base `Animal` y cuatro subclases que hereden de ella, cada una con su propia implementación del método `descripcion()`. Al final, se deben crear instancias de cada clase y llamar a su método para demostrar el polimorfismo.

## **Instrucciones:**
1. Crea una clase base llamada `Animal` con las propiedades `especie` y `sonido`. Incluye un método llamado `descripcion()`.
2. Crea cuatro subclases que hereden de `Animal`:
   - **`Perro`**: Añade la propiedad `raza`. Sobrescribe el método para incluir su raza en el mensaje.
   - **`Ave`**: Añade la propiedad `puedeVolar` (Booleano). Sobrescribe el método para indicar si vuela al hacer su sonido.
   - **`Humano`**: Añade la propiedad `nombre`. Sobrescribe el método para que se presente con su nombre.
   - **`Skinwalker`**: Añade la propiedad `formaOculta`. Sobrescribe el método para que imite el sonido de su forma oculta, pero revelando que es un impostor.
3. Instancia un objeto de cada clase y haz que todos llamen a su método `descripcion()`.