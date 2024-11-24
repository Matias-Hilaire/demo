Inmobiliaria Web
Este proyecto es una plataforma web para la visualización y gestión de propiedades en venta. Está construido con Next.js, TypeScript y Tailwind CSS, y utiliza Turso Drizzle para la gestión de la base de datos. La aplicación permite a los usuarios ver propiedades disponibles, junto con su información relevante, y muestra imágenes de las propiedades si están disponibles.

Tabla de contenidos
Descripción
Características
Tecnologías utilizadas
Instalación
Uso
Estructura del proyecto
Contribución
Licencia
Descripción
Este proyecto es una aplicación web diseñada para una inmobiliaria de alto renombre. Permite a los usuarios visualizar propiedades disponibles para la venta, con información detallada como precio, tamaño y número de habitaciones. Además, las propiedades pueden tener imágenes asociadas que se muestran en una interfaz limpia y fácil de usar.

Características
Visualización de propiedades: Se muestran las propiedades disponibles con información como precio, tamaño, y cantidad de habitaciones.
Imágenes de propiedades: Las propiedades pueden tener imágenes asociadas que se muestran dinámicamente.
Filtros de búsqueda: Posibilidad de filtrar las propiedades disponibles según diferentes criterios (por ejemplo, precio, tamaño).
Base de datos dinámica: Se utilizan bases de datos dinámicas para almacenar y recuperar las propiedades.
Tecnologías utilizadas
Este proyecto está construido utilizando las siguientes tecnologías:

Next.js: Framework para React que permite la creación de aplicaciones web optimizadas.
TypeScript: Superset de JavaScript que añade tipado estático.
Tailwind CSS: Framework de diseño que facilita la creación de interfaces limpias y personalizables.
Turso Drizzle: ORM ligero para trabajar con bases de datos en aplicaciones Next.js.
Image Optimization de Next.js: Optimización automática de imágenes.
Instalación
Para empezar con este proyecto, sigue estos pasos:

1. Clona el repositorio

git clone https://github.com/tu-usuario/inmobiliaria-web.git
2. Instala las dependencias
Dirígete al directorio del proyecto e instala las dependencias:

cd inmobiliaria-web
npm install
3. Configura la base de datos
Asegúrate de tener acceso a la base de datos Turso Drizzle o la base de datos que hayas configurado en el proyecto.

4. Ejecuta el servidor de desarrollo
Inicia el servidor de desarrollo con:

npm run dev
Accede a la aplicación en http://localhost:3000.

Uso
Al abrir la aplicación en el navegador, podrás visualizar las propiedades disponibles para la venta. Las imágenes se cargan dinámicamente si están disponibles en la base de datos.

Las propiedades se muestran en tarjetas con su nombre, descripción, precio, tamaño y número de habitaciones. Si la propiedad tiene imágenes asociadas, se mostrarán en la interfaz.

Estructura del proyecto
La estructura básica del proyecto es la siguiente:

python
inmobiliaria-web/
├── public/
│   ├── uploads/          # Imágenes de las propiedades
│   └── placeholder.png   # Imagen de reemplazo en caso de no tener imagen
├── src/
│   ├── app/
│   │   └── propiedades/  # Página que muestra las propiedades
│   └── components/
│       └── PropertyCard.tsx  # Componente para mostrar cada propiedad
├── styles/
│   └── globals.css       # Estilos globales del proyecto
├── next.config.js        # Configuración de Next.js
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts del proyecto
Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tus cambios (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit con un mensaje descriptivo.
Empuja tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
Abre un Pull Request describiendo tus cambios.