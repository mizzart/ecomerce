const mongoose = require('mongoose');

const CarritoSchema = new mongoose.Schema({
    usuarioId: { type: String, unique: true, required: true },
    productos: [{
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'producto', required: true },
        cantidad: { type: Number, required: true }
    }],
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Carrito', CarritoSchema);
