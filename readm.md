# **Inmobiliaria Web**

Este proyecto es una plataforma web para la visualización y gestión de propiedades en venta. Está construido con **Next.js**, **TypeScript** y **Tailwind CSS**, y utiliza **Turso Drizzle** para la gestión de la base de datos. La aplicación permite a los usuarios ver propiedades disponibles, junto con su información relevante, y muestra imágenes de las propiedades si están disponibles.

---

## **Tabla de Contenidos**
1. **[Descripción](#descripción)**
2. **[Características](#características)**
3. **[Tecnologías Utilizadas](#tecnologías-utilizadas)**
4. **[Instalación](#instalación)**
5. **[Uso](#uso)**
6. **[Estructura del Proyecto](#estructura-del-proyecto)**
7. **[Contribución](#contribución)**
8. **[Licencia](#licencia)**

---

## **Descripción**
Este proyecto es una aplicación web diseñada para una inmobiliaria de alto renombre. Permite a los usuarios visualizar propiedades disponibles para la venta, con información detallada como **precio**, **tamaño** y **número de habitaciones**. Además, las propiedades pueden tener imágenes asociadas que se muestran en una interfaz **limpia y fácil de usar**.

---

## **Características**
- **Visualización de propiedades:** Se muestran las propiedades disponibles con información como **precio**, **tamaño**, y **cantidad de habitaciones**.
- **Imágenes de propiedades:** Las propiedades pueden tener imágenes asociadas que se muestran dinámicamente.
- **Filtros de búsqueda:** Posibilidad de filtrar las propiedades disponibles según diferentes criterios (por ejemplo, **precio**, **tamaño**).
- **Base de datos dinámica:** Se utilizan bases de datos dinámicas para almacenar y recuperar las propiedades.

---

## **Tecnologías Utilizadas**
Este proyecto está construido utilizando las siguientes tecnologías:
- **Next.js:** Framework para React que permite la creación de aplicaciones web optimizadas.
- **TypeScript:** Superset de JavaScript que añade tipado estático.
- **Tailwind CSS:** Framework de diseño que facilita la creación de interfaces limpias y personalizables.
- **Turso Drizzle:** ORM ligero para trabajar con bases de datos en aplicaciones Next.js.
- **Image Optimization de Next.js:** Optimización automática de imágenes.

---

## **Instalación**
Para empezar con este proyecto, sigue estos pasos:

1. **Clona el repositorio:**  
   ```bash
   git clone https://github.com/tu-usuario/inmobiliaria-web.git

2. **Instala las dependencias:**  
   - Dirígete al directorio del proyecto e instala las dependencias con el siguiente comando:  
     ```bash
     cd inmobiliaria-web  
     npm install  
     ```

3. **Configura la base de datos:**  
   - Asegúrate de tener acceso a la base de datos **Turso Drizzle** o la base de datos configurada para el proyecto.  
   - Revisa las configuraciones necesarias en los archivos del proyecto para conectarte correctamente a la base de datos.

   4. **Ejecuta el servidor de desarrollo:**  
   - Inicia el servidor de desarrollo con el siguiente comando:  
     ```bash
     npm run dev  
     ```  
   - Accede a la aplicación en [http://localhost:3000](http://localhost:3000).

5. **Uso:**  
   - Abre la aplicación en tu navegador accediendo a [http://localhost:3000](http://localhost:3000).  
   - Podrás visualizar las propiedades disponibles para la venta.  
     - Las imágenes de las propiedades se cargarán dinámicamente si están disponibles en la base de datos.  
   - Las propiedades se muestran en tarjetas con la siguiente información:  
     - **Nombre**  
     - **Descripción**  
     - **Precio**  
     - **Tamaño**  
     - **Número de habitaciones**  
   - Si una propiedad tiene imágenes asociadas, estas se mostrarán en la interfaz.

6. **Estructura del Proyecto:**  
   La estructura básica del proyecto es la siguiente:

   ```plaintext
   inmobiliaria-web/
   ├── public/
   │   ├── uploads/          # Imágenes de las propiedades
   │   └── placeholder.png   # Imagen de reemplazo en caso de no tener imagen
   ├── src/
   │   ├── app/
   │   │   ├── api/
   │   │   │   └── propiedades/
   │   │   │       └── route.ts   # Archivo de rutas de la API
   │   │   ├── contactanos/
   │   │   │   └── page.tsx    # Página de contacto
   │   │   ├── db/
   │   │   │   ├── index.ts    # Conexión a la base de datos
   │   │   │   └── schema.ts   # Definición del esquema de la base de datos
   │   │   ├── inicio/
   │   │   │   └── page.tsx    # Página de inicio
   │   │   ├── mapa/
   │   │   │   └── page.tsx    # Página del mapa
   │   │   ├── newProp/
   │   │   │   └── page.tsx    # Página para agregar nuevas propiedades
   │   │   ├── imagenes/
   │   │   │   └── page.tsx    # Página para gestionar imágenes
   │   │   ├── propiedades/
   │   │   │   ├── [propiedad]/
   │   │   │   │   ├── page.tsx    # Página de una propiedad específica
   │   │   │   └── page.tsx    # Página de todas las propiedades
   │   ├── globals.css        # Estilos globales del proyecto
   │   ├── layout.tsx         # Diseño y estructura general de la app
   │   ├── threeBarMenu.tsx   # Componente del menú de tres barras
   ├── favicon.ico            # Icono de la aplicación
   └── package.json           # Dependencias y scripts del proyecto


7. **Contribución:**  
   - Si deseas contribuir a este proyecto, sigue estos pasos:  
     1. Haz un **fork** del repositorio.
     2. Crea una nueva **rama** para tus cambios:  
        ```bash
        git checkout -b nombre-de-tu-rama
        ```
     3. Realiza tus cambios y haz **commits** descriptivos.  
     4. Envía un **pull request** con una descripción clara de los cambios realizados.
   - Asegúrate de seguir las mejores prácticas de codificación y de que tu código esté libre de errores.

8. **Licencia:**  
   - Este proyecto está bajo la **Licencia MIT**.  
   - Puedes encontrar más detalles en el archivo **LICENSE** incluido en el repositorio.  
   - Se permite el uso, modificación y distribución del código, siempre que se mantenga la referencia a la licencia original.
