const express = require('express');
const morgan = require('morgan');
const sequelize = require('./config/database');
const Producto = require('./models/Producto');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Configuraciones
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Rutas
app.use('/', productoRoutes);

// Prueba de conexión a la base de datos
sequelize.sync({ force: false })
    .then(() => console.log('✓ Conexión exitosa a Aiven MySQL'))
    .catch(err => console.log('✗ Error al conectar:', err));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✓ Servidor corriendo en http://localhost:${PORT}`);
});