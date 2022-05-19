# code_challenge_weekly_mission_4

Cursos de Visual Thinking API


* Dependencias:
  * Jest: pruebas de unidad.
  * ESLint: encontrar y corregir errores de sintaxis de código.
  * Express: montar un servidor.


* Diseño:
  * Utils: clases auxiliares.
  * Services: contiene la lógica de la programación.
  * Controllers: realiza la conexión entre el servidor y los servicios.


* Consultas:

| Endpoint                                     | Request                                | Response                                                                      |
| -------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| localhost:3000/v1/students                   | localhost:3000/v1/students             | Obtiene todos los estudiantes y sus datos.                                    |
| localhost:3000/v1/students/emails/:condition | localhost:3000/v1/students/emails/true | Obtiene todos los emails de los estudiantes que tienen certificado.           |
| localhost:3000/v1/students/credits/:credits  | localhost:3000/v1/students/credits/500 | Obtiene todos los names de los estudiantes que tienen creditos mayores a 500. |
