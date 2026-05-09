const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Dashboard - Ruta principal
router.get('/', productoController.obtenerProductos);

// Crear producto
router.get('/crear', productoController.formularioCrear);
router.post('/crear', productoController.crearProducto);

// Editar producto
router.get('/editar/:id', productoController.formularioEditar);
router.post('/editar/:id', productoController.actualizarProducto);

// Eliminar producto
router.get('/eliminar/:id', productoController.eliminarProducto);

module.exports = router;