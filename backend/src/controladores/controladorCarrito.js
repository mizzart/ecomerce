const Carrito = require('../modelos/carrito');

exports.crearCarrito = async (req, res) => {
    const { usuarioId, productos } = req.body
    try {
        const nuevoCarrito = new Carrito({
            usuarioId,
            productos
        });
        await nuevoCarrito.save();
        res.status(201).json({ mensaje: 'Carrito creado', carrito: nuevoCarrito });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el carrito', error: error.message });
    }
};

exports.obtenerCarrito = async (req, res) => {
    const { usuarioId } = req.params
    try {
        const carrito = await Carrito.findOne({ usuarioId: usuarioId }).populate('productos.producto');
        if (!carrito) {
            return res.status(404).json({ mensaje: 'Carrito no encontrado' })
        }
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el carrito', error: error.message });
    }
};

exports.actualizarCarrito = async (req, res) => {
    const { usuarioId, productos } = req.body
    try {
        const carritoActualizado = await Carrito.findOneAndUpdate(
            { usuarioId: usuarioId },
            { productos },
            { new: true }
        );
        if (!carritoActualizado) {
            return res.status(404).json({ mensaje: 'Carrito no encontrado' })
        }
        res.status(200).json({ mensaje: 'Carrito actualizado', carrito: carritoActualizado });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el carrito', error: error.message });
    }
};

exports.eliminarCarrito = async (req, res) => {
    const { usuarioId } = req.params
    try {
        const carritoEliminado = await Carrito.findOneAndUpdate(
            { usuarioId: usuarioId },
            { productos: [] },
            { new: true }
        )

        if (!carritoEliminado) {
            return res.status(404).json({ mensaje: 'Carrito no encontrado' })
        }

        res.status(200).json({ mensaje: 'Carrito vacio', carrito: carritoEliminado });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el carrito', error: error.message });
    }
};
