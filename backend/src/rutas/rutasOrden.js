const express = require('express');
const router = express.Router();
const controladorOrden = require('../controladores/controladorOrden');


router.post('/:usuarioId/crear', controladorOrden.crearOrdenDesdeCarrito); 
router.get('/:usuarioId/orden/:ordenId', controladorOrden.obtenerOrden); 


module.exports = router;

