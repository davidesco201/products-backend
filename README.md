# Products Backend

Este es un proyecto Node.js que proporciona una API para gestionar productos y carrito de compras. A continuación, se detallan los pasos para descargar y ejecutar el proyecto sin dificultades.

## Requisitos

- [Node.js](https://nodejs.org/) instalado en tu máquina.

## Instalación

1. **Descargar el proyecto:**

   Puedes descargar el proyecto directamente desde GitHub o clonarlo utilizando Git:

   ```bash
   git clone https://github.com/davidesco201/products-backend.git
   ```

2. **Instalar dependencias:**

   Navega hasta el directorio del proyecto e instala las dependencias ejecutando el siguiente comando:

   ```bash
   npm install
   ```

   Esto instalará las dependencias necesarias, incluyendo Express y Nodemon.

## Ejecución

1. **Ejecutar la aplicación:**

   Para iniciar la aplicación, ejecuta el siguiente comando:

   ```bash
   npm start
   ```

   Esto iniciará el servidor en [http://localhost:3000](http://localhost:3000) o en el puerto que se encuentre disponible.

2. **Endpoints de la API:**

   - **Obtener todos los productos:**
     - Método: `GET`
     - URL: [http://localhost:3000/products](http://localhost:3000/products)
   
   - **Obtener los productos por categoria:**
     - Método: `GET`
     - URL: [http://localhost:3000/products/:category](http://localhost:3000/products/:category)

   - **Agregar producto al carrito:**
     - Método: `POST`
     - URL: [http://localhost:3000/cart/](http://localhost:3000/cart/)
     - Cuerpo de la solicitud: `{ "product_id": 123 }`

   - **Obtener productos en el carrito:**
     - Método: `GET`
     - URL: [http://localhost:3000/cart](http://localhost:3000/cart)

## Estructura del Proyecto

- **`app.js`:** Archivo principal de la aplicación que configura Express y define las rutas.
- **`routes/router.js`:** Archivo que contiene las rutas de la aplicación.
- **`routes/cart.js`:** Archivo que contiene las rutas del carrito.
- **`routes/product.js`:** Archivo que contiene las rutas de los productos.
- **`model/product/product.js`:** Modelo para la manipulación de productos.
- **`model/product/product.json`:** Archivo JSON con los datos de los productos (BD).
- **`model/cart/cart.js`:** Modelo para la manipulación del carrito de compras.
- **`model/cart/cart.json`:**  Archivo JSON con los datos del carrito de compras (BD).
- **`controller/product.js`:** Controlador para las operaciones relacionadas con productos.
- **`controller/cart.js`:** Controlador para las operaciones relacionadas con el carrito de compras.
- **`service/product.js`:** Servicio que maneja la lógica de productos.
- **`service/cart.js`:** Servicio que maneja la lógica del carrito de compras.
- **`validators/validator.js`:** Servicio que maneja las validaciones de los datos.
- **`package.json`:** Archivo de configuración de Node.js con las dependencias y scripts necesarios.

## Autor

- [David Alejandro Espitia | davidesco201](https://github.com/davidesco201)

## Licencia

Este proyecto está bajo la Licencia ISC. Puedes encontrar más detalles en el archivo `LICENSE`.
