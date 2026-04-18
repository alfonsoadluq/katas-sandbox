# **🤐 Reto: El Protocolo AM ("No tengo boca y debo gritar")**

La supercomputadora **AM (Allied Mastercomputer)** ha destruido a la humanidad, salvando solo a 5 personas para torturarlas eternamente.

Su objetivo final con uno de ellos (Ted) es transformarlo en una entidad gelatinosa, despojándolo de su boca para que no pueda gritar, asegurándose de que el sistema informático no permita jamás que esa entidad emita un sonido.

## **Instrucciones**
- Crea dos interfaces: `Human` y `Blob`.
- Ambas deben compartir una propiedad discriminante llamada `state` (cuyos valores literales sean `"HUMANO"` y `"BLOB"`).
- El Humano debe tener las propiedades `name` (*string*) y `mouth` (*boolean*, siempre true).
- La MasaGelatinosa debe tener la propiedad `name` (string) pero **NO** debe existir la propiedad `mouth`. Tampoco debe poder usar la función `shout`.

- Crea un tipo genérico llamado `AMTorture`.
Este tipo debe tomar a un `Human`, eliminarle la propiedad `mouth` (usando el utilitario Omit) y cambiar su estado estrictamente a "`BLOB`".

- Crea la clase `AlliedMastercomputer`. Debe tener un método transformar que reciba un `Human` y retorne el objeto transformado aplicando el tipo `AMTorture`.

- Crea una función fuera de la clase llamada `analizeEntity`(entidad: `Human` | `Blob`).

- Usa un switch basado en la propiedad state, si es humano, imprime "AM escucha los gritos de [`name`].".
Si es masa gelatinosa, imprime "AM observa a [`name`] retorcerse en silencio.".

- En el bloque default del switch, debes asignar la entidad a una variable de tipo `never`. Esto garantiza que si en el futuro añadimos un estado "`CYBORG`", TypeScript lanzará un error de compilación.