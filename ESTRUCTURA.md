# Estructura del Proyecto ArtStock Manager

## 📁 Organización de Carpetas

```
ArtStock-Manager/
├── src/                          # Código fuente del backend
│   ├── app.js                    # Punto de entrada principal
│   ├── config/
│   │   └── database.js           # Configuración de conexión a MySQL
│   ├── models/
│   │   └── Producto.js           # Modelo de datos del producto
│   ├── controllers/
│   │   └── productoController.js # Lógica de negocio
│   ├── routes/
│   │   └── productoRoutes.js     # Definición de rutas
│   └── views/                    # Frontend - Vistas EJS
│       ├── dashboard.ejs         # Página principal (lista productos)
│       ├── crear.ejs             # Formulario crear producto
│       └── editar.ejs            # Formulario editar producto
│
├── public/                       # Archivos estáticos (CSS, JS, imágenes)
│   └── grafica.js               # Lógica de gráficos con Chart.js
│
├── .env                          # Variables de entorno (NO subir a Git)
├── .env.example                  # Template de variables de entorno
├── .gitignore                    # Archivos ignorados por Git
├── Procfile                      # Configuración para despliegue en Render
├── package.json                  # Dependencias y scripts
├── package-lock.json             # Lock file de dependencias
├── README.md                     # Documentación completa
├── ESTRUCTURA.md                 # Este archivo
├── fix-data.js                   # Script para limpiar datos
└── reset-db.js                   # Script para resetear BD

```

## 🔄 Flujo de Datos Backend → Frontend

```
1. Usuario hace petición HTTP
   ↓
2. Express router lo dirige a la ruta correcta
   ↓
3. Controller maneja la lógica
   ↓
4. Model interactúa con la BD (MySQL)
   ↓
5. Controller retorna datos
   ↓
6. EJS renderiza la vista con los datos
   ↓
7. Bootstrap + Chart.js estilizan el frontend
```

## 🚀 Rutas Disponibles

| Método | Ruta | Descripción | Controller |
|--------|------|-----------|-----------|
| GET | `/` | Mostrar dashboard con todos los productos | obtenerProductos |
| GET | `/crear` | Mostrar formulario para crear | formularioCrear |
| POST | `/crear` | Guardar nuevo producto en BD | crearProducto |
| GET | `/editar/:id` | Mostrar formulario de edición | formularioEditar |
| POST | `/editar/:id` | Actualizar producto en BD | actualizarProducto |
| GET | `/eliminar/:id` | Eliminar producto por ID | eliminarProducto |

## 📊 Modelo de Datos - Tabla Productos

```sql
CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  subcategoria_tamano VARCHAR(100),
  subcategoria_forma VARCHAR(100),
  costo DECIMAL(10,2) NOT NULL DEFAULT 0,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🔧 Configuración de Middlewares

### En `app.js`:
- `morgan('dev')` - Logger de peticiones HTTP
- `express.json()` - Parseo de JSON en request body
- `express.urlencoded({ extended: false })` - Parseo de formularios HTML
- `express.static('public')` - Servir archivos estáticos

## 🌐 Frontend - Vistas EJS

### dashboard.ejs
- Tabla con lista de productos
- Gráfico comparativo con Chart.js
- Checkboxes para filtrar productos en gráfico
- Botones de editar/eliminar

### crear.ejs
- Formulario para crear nuevo producto
- Campos: nombre, categoría, costo, precio, stock
- Validación en cliente y servidor

### editar.ejs
- Formulario para modificar producto existente
- Pre-rellena datos actuales
- Mismos campos que crear.ejs

## 🔐 Variables de Entorno  (.env)

```
DB_HOST=mysql-host.aivencloud.com
DB_PORT=12345
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=base_datos
PORT=3000
NODE_ENV=development
```

## 📦 Stack Tecnológico

**Backend:**
- Node.js - Runtime JavaScript
- Express.js - Framework web
- Sequelize - ORM para MySQL
- MySQL2 - Driver de MySQL
- Morgan - Logger de HTTP
- CORS - Control de origen cruzado
- dotenv - Gestión de variables de entorno

**Frontend:**
- EJS - Template engine
- Bootstrap 5 - Framework CSS
- Chart.js - Librería de gráficos
- HTML5/CSS3/JavaScript Vanilla

**Base de Datos:**
- MySQL 8.0+ (Aiven)

**Despliegue:**
- Render - Hosting
- Git/GitHub - Control de versiones

## 🔍 Flujo de una Petición: Crear Producto

```
1. Usuario llena formulario en crear.ejs
2. Hace POST a /crear
3. Express enruta a productoController.crearProducto
4. Controller valida los datos
5. Llama a Producto.create() (Sequelize)
6. Sequelize ejecuta INSERT en MySQL
7. Si todo va bien: redirect a /
8. Si hay error: res.status(500).send()
9. En / se ejecuta obtenerProductos
10. Se renderiza dashboard.ejs con lista actualizada
```

## 📝 Mejores Prácticas Implementadas

✅ Separación de responsabilidades (MVC)
✅ Validación de datos
✅ Manejo de errores
✅ Variables de entorno
✅ Rutas bien organizadas
✅ Comentarios en código
✅ Nombres descriptivos
✅ Bootstrap para responsive design
✅ Git ignore configurado
✅ README documentado

## 🚀 Para ejecutar en desarrollo

```bash
npm install
npm run dev
# Acceder a http://localhost:3000
```

## 📦 Para producción (Render)

```bash
npm install
npm start
```

