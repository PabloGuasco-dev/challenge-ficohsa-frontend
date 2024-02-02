Frontend Challenge - FullStack
Este proyecto consta de un backend desarrollado en Java con Spring Boot y un frontend construido con Next.js y ReactJS. La aplicación permite realizar búsquedas de items y ver detalles de los mismos.


Endpoints

Endpoint: /api/items?q=:query
Método: GET
Retorna los ítems que coincidan con el valor proporcionado.


Endpoint: /api/items/:id
Método: GET
Retorna el detalle del ítem filtrado por su Id.



Swagger
La documentación de la API se puede acceder en http://localhost:8080/swagger-ui.html.

Frontend
Requisitos
Node.js 20 LTS
Next.js ^13
ReactJS ^18
Axios o Fetch
TailwindCSS o SASS con CSS Module
Zustand para manejo global de estados
MaterialUI (opcional, pero valorable)
Jest y/o React Testing Library para pruebas unitarias
Instalación y Ejecución
Navega al directorio del frontend:

bash
Copy code
cd frontend

Instala las dependencias:

bash
Copy code
npm install

Ejecuta la aplicación:

bash
Copy code
npm run dev
La aplicación estará disponible en http://localhost:3000.

Estructura del Frontend
Caja de Búsqueda:

Ruta: /
Permite ingresar el parámetro a buscar y al enviar el formulario navega a la vista de Resultados de búsqueda.
Resultados de la Búsqueda:

Ruta: /items?search=:query
Muestra hasta 4 items que coinciden con la búsqueda.
Detalle del Ítem:

Ruta: /items/:id
Muestra el detalle del ítem correspondiente al id proporcionado.
Pruebas Unitarias
Se ha incluido al menos 1 prueba unitaria sobre uno de los componentes construidos utilizando Jest y React Testing Library.

Observaciones Importantes
Api de Backend:


Se han tenido en cuenta aspectos de SEO y usabilidad para mejorar la experiencia del usuario.

Adaptadores de Datos:

Se ha valorado la implementación de adaptadores de datos para facilitar la modularidad y reutilización del código.
Atomic Design y Patrones de Diseño:

Se ha valorado la aplicación de Atomic Design y patrones de diseño, como Event Domain y Clean Architecture, para asegurar una arquitectura limpia y modular.
Comentarios y Clean Code:

Se han incluido comentarios donde ha sido necesario para mejorar la comprensión del código. El código sigue los principios de Clean Code.