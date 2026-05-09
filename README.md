# ArtStock Manager: Sistema de Gestión de Inventario 🎨

Sistema full-stack para el control de producción artística, inventario y análisis de ventas.

## 📋 Descripción del Proyecto

ArtStock Manager es una aplicación web que permite gestionar de manera eficiente el inventario de productos artísticos (Stickers, Posters, Pines). Ofrece funcionalidades para:

- **Crear productos** con información de costo, precio y stock
- **Visualizar inventario** en tiempo real con gráficos comparativos
- **Editar y actualizar** información de productos
- **Eliminar productos** del sistema
- **Análisis visual** con Chart.js para comparativa de stock, ventas y costos

## 🏗️ Arquitectura

| Componente | Tecnología |
|-----------|-----------|
| **Frontend** | EJS + Bootstrap 5 |
| **Backend** | Node.js + Express |
| **Base de Datos** | MySQL (Aiven) |
| **Despliegue** | Render |
| **Control de Versiones** | Git + GitHub |

## 🚀 Instrucciones de Instalación Local

### Prerrequisitos
- Node.js (v14 o superior)
- Git
- Cuenta en Aiven con base de datos MySQL configurada

### Pasos para clonar y ejecutar

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/ArtStock-Manager.git
   cd ArtStock-Manager
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   - Copia el archivo `.env.example` a `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edita `.env` con tus credenciales de Aiven:
     ```
     DB_HOST=tu-host-aiven.aivencloud.com
     DB_PORT=12345
     DB_USER=tu-usuario
     DB_PASSWORD=tu-contraseña
     DB_NAME=tu-base-datos
     PORT=3000
     NODE_ENV=development
     ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`

5. **Ejecutar en producción:**
   ```bash
   npm start
   ```

## 📡 API - Rutas Disponibles

### Productos
| Método | Ruta | Descripción |
|--------|------|-----------|
| GET | `/` | Obtener lista de todos los productos con gráfico |
| GET | `/crear` | Mostrar formulario para crear producto |
| POST | `/crear` | Guardar nuevo producto en BD |
| GET | `/editar/:id` | Mostrar formulario para editar producto |
| POST | `/editar/:id` | Actualizar información del producto |
| GET | `/eliminar/:id` | Eliminar producto por ID |

## 📦 Dependencias Principales

```json
{
  "express": "^5.2.1",
  "sequelize": "^6.37.8",
  "mysql2": "^3.22.3",
  "dotenv": "^17.4.2",
  "ejs": "^5.0.2",
  "morgan": "^1.10.1",
  "cors": "^2.8.6"
}
```

**Desarrollo:**
- `nodemon`: ^3.0.1

## 🌐 Despliegue en Render

### Configuración en Render

1. **Conectar repositorio GitHub:**
   - Ve a [Render](https://render.com)
   - Crea nuevo "Web Service"
   - Selecciona tu repositorio GitHub
   - Autoriza la conexión

2. **Configurar variables de entorno en Render:**
   - En el panel de Render, ve a "Environment"
   - Añade las mismas variables que en `.env`:
     ```
     DB_HOST=tu-host-aiven.aivencloud.com
     DB_PORT=12345
     DB_USER=tu-usuario
     DB_PASSWORD=tu-contraseña
     DB_NAME=tu-base-datos
     NODE_ENV=production
     ```

3. **Configurar Build & Deploy:**
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Habilitar CI/CD automático:**
   - Render desplegará automáticamente cada vez que hagas push a `main`

## 📁 Estructura del Proyecto

```
ArtStock-Manager/
├── src/
│   ├── app.js                 # Configuración principal de Express
│   ├── config/
│   │   └── database.js        # Conexión a MySQL con Sequelize
│   ├── models/
│   │   └── Producto.js        # Modelo de datos del producto
│   ├── controllers/
│   │   └── productoController.js  # Lógica de negocio
│   ├── routes/
│   │   └── productoRoutes.js  # Definición de rutas
│   └── views/
│       ├── dashboard.ejs      # Vista principal con gráfico
│       ├── crear.ejs          # Formulario crear producto
│       └── editar.ejs         # Formulario editar producto
├── public/
│   └── grafica.js            # Lógica de gráficos con Chart.js
├── .env.example              # Template de variables de entorno
├── .gitignore                # Archivos a ignorar en Git
├── Procfile                  # Configuración para Render
├── package.json              # Dependencias del proyecto
├── fix-data.js               # Script de utilidad
├── reset-db.js               # Script para resetear BD
└── README.md                 # Este archivo
```

## 🔄 Git Workflow

1. **Crear rama para nueva funcionalidad:**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Hacer cambios y commits:**
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   ```

3. **Subir cambios a GitHub:**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

4. **Crear Pull Request en GitHub**

5. **Render desplegará automáticamente después del merge a main**

## 📊 Modelo de Datos - Producto

```javascript
{
  id: Integer (PK),
  nombre: String,
  categoria: Enum('Stickers', 'Posters', 'Pines'),
  costo: Decimal(10,2),
  precio: Decimal(10,2),
  stock: Integer,
  createdAt: Date,
  updatedAt: Date
}
```

## 🐛 Solución de Problemas

### Error de conexión a Aiven
- Verifica que `DB_HOST`, `DB_USER` y `DB_PASSWORD` sean correctos
- Comprueba que tu dirección IP esté en la whitelist de Aiven
- Prueba la conexión manualmente con MySQL Workbench

### Aplicación no se deploya en Render
- Revisa los logs: Dashboard de Render → Logs
- Verifica que `Procfile` esté en la raíz del proyecto
- Confirma que `package.json` tiene script `start`

### Cambios no se reflejan en producción
- Espera 1-2 minutos tras hacer push (tiempo de despliegue)
- Limpia caché del navegador (Ctrl+Shift+R)
- Revisa los logs de Render para errores

## 📝 Notas de Desarrollo

- El archivo `public/grafica.js` contiene la lógica de Chart.js
- Las migraciones de BD se hacen automáticamente con `sequelize.sync()`
- Morgan registra todas las peticiones HTTP en desarrollo




Implementación y Mantenimiento de Apps