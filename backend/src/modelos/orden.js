const mongoose = require('mongoose');
const OrdenSchema = new mongoose.Schema({
    usuarioId: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now },
    productos: [{
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'enviado', 'entregado', 'cancelado'], default: 'pendiente' }
});
module.exports = mongoose.model('Orden', OrdenSchema)