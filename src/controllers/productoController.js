const Producto = require('../models/Producto');

// Obtener todos los productos y mostrar dashboard
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.render('dashboard', { productos }); 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error al cargar el dashboard');
    }
};

// Mostrar formulario de creación
exports.formularioCrear = (req, res) => {
    try {
        res.render('crear', { error: null, values: {} });
    } catch (error) {
        console.error('Error al mostrar formulario:', error);
        res.status(500).send('Error al cargar formulario');
    }
};

// Crear nuevo producto
exports.crearProducto = async (req, res) => {
    try {
        const { nombre, categoria, costo, precio, stock } = req.body;

        if (!nombre || !categoria || !costo || !precio || !stock) {
            return res.status(400).send('Faltan campos requeridos');
        }

        const productoExistente = await Producto.findOne({ where: { nombre } });
        if (productoExistente) {
            return res.render('crear', {
                error: 'Ya existe un producto con ese nombre. Cambia el nombre o agrega un sufijo como #2.',
                values: { nombre, categoria, costo, precio, stock }
            });
        }

        await Producto.create({
            nombre,
            categoria,
            costo,
            precio,
            stock
        });
        res.redirect('/');
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).send('Error al guardar el producto');
    }
};

// Mostrar formulario de edición
exports.formularioEditar = async (req, res) => {
    try {
        const p = await Producto.findByPk(req.params.id);
        if (!p) {
            return res.status(404).send('Producto no encontrado');
        }
        res.render('editar', { p });
    } catch (error) {
        console.error('Error al cargar formulario de edición:', error);
        res.status(500).send('Error al cargar el formulario de edición');
    }
};

// Actualizar producto
exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, costo, precio, stock } = req.body;
        
        if (!nombre || !categoria || !costo || !precio || !stock) {
            return res.status(400).send('Faltan campos requeridos');
        }

        await Producto.update(
            { nombre, categoria, costo, precio, stock },
            { where: { id: req.params.id } }
        );
        res.redirect('/');
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).send('Error al actualizar el producto');
    }
};

// Eliminar producto
exports.eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }

        await Producto.destroy({ where: { id } });
        res.redirect('/');
    } catch (error) {
        console.error('Error al eliminar:', error);
        res.status(500).send('Error al eliminar el producto');
    }
};
