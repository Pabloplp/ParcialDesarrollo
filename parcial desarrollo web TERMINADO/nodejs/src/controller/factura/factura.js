const Connect = require('../../database/database');
const mysql = require('mysql');
const express = require('express');
var router = express.Router();

router.post('/:id/detalle', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("INSERT INTO productos_facturas (producto_id,factura_id,cantidad,subtotal,creado_por) VALUES (?,?,?,?,?) ", [body.producto_id, req.params.id, body.cantidad, body.subtotal, body.creado_por], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("CREATED SUCCESFULY")
    });
});


router.post('/', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("INSERT INTO facturas (cliente_id,empleado_id,creado,estado) VALUES (?,?,CURDATE(),?) ", [body.cliente_id, body.empleado_id, body.estado], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("CREATED SUCCESFULY")
    });
});

router.get('/:id/productos', (req, res) => {
    var id = req.params.id;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
        connection.query(`SELECT pf.id,p.nombre,pf.cantidad,pf.subtotal,pf.creado_por FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id WHERE f.id= ?`, [id], function (error, results, fields) {
        if (error) { res.json(error) };
        res.json(results)
        connection.end();
    });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query(`SELECT f.id,DATE_FORMAT(f.creado, '%d/%m/%Y') as creado,SUM(pf.subtotal) AS total,e.nombre AS empleado,f.estado FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id
        JOIN productos AS p ON p.id=pf.producto_id
        JOIN empleados AS e ON e.id=f.empleado_id
        where f.id = ?
        group by f.id,f.creado,e.nombre, f.estado`, [id], function (error, results, fields) {
        if (error) { res.json(error) };
        res.json(results)
        connection.end();
    });
});


router.put('/:id', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("UPDATE facturas SET cliente_id=?,empleado_id=? WHERE id= ? ", [body.cliente_id, body.empleado_id, req.params.id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("UPDATED SUCCESFULY")
    });
});
router.patch('/:id', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("UPDATE facturas SET estado=? WHERE id= ? ", [body.estado, req.params.id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("UPDATED SUCCESFULY")
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("UPDATE facturas SET estado='ANULADA' WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("DELETED SUCCESFULY")
    });
});

router.delete('/:id/detalle', (req, res) => {
    var id = req.params.id
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("DELETE FROM productos_facturas WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("DELETED SUCCESFULY")
    });
});




module.exports = {
    router
}