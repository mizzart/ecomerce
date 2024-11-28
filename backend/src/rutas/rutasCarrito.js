const express = require('express');
const router = express.Router();
const controladorCarrito = require('../controladores/controladorCarrito');


router.post('/crear', controladorCarrito.crearCarrito);
router.get('/:usuarioId', controladorCarrito.obtenerCarrito);
router.put('/actualizar', controladorCarrito.actualizarCarrito);
router.delete('/vaciar/:usuarioId', controladorCarrito.eliminarCarrito);

module.exports = router;
