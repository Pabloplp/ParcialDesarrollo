const express = require('express');
const clientes = require('../controller/clientes/cliente');
const empleados = require('../controller/empleados/empleados');
const factura = require('../controller/factura/factura');
const user = require('../controller/user/user');
const productos = require('../controller/productos/productos');
const jwt = require('jsonwebtoken');

const security = (req, res, next) => {
    const BearerHeader = req.headers['access-token'];
    if (typeof BearerHeader !== 'undefined') {
        const bearer = BearerHeader.split(" ");
        const Token = bearer[1];
        jwt.verify(Token, 'clave secreta', (err, data) => {
            if (err) { res.json({ mensaje: 'SIN ACCESO' }); }
            else { return next() }
        })
    } else {
        res.json({ mensaje: 'SIN ACCESO' });
    }
}

var router = express.Router();

router.use('/clientes', security, clientes.router);
router.use('/empleados', security, empleados.router);
router.use('/facturas', security, factura.router);
router.use('/productos', security, productos.router);
router.use('/login', user.router);

module.exports = {
    router
}