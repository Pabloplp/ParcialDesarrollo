const Connect = require('../../database/database');
const mysql = require('mysql');
const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("INSERT INTO clientes (nombre,direccion,nit,creado_por) VALUES (?,?,?,?) ", [body.nombre, body.direccion, body.nit, body.creado_por], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json({ mensaje: 'se creo el cliente' })
    });
});

router.get('/', (req, res) => {
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("SELECT * FROM clientes", function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json(results)
    });
});

router.get('/:id/facturas', (req, res) => {
    var id = req.params.id;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query(`SELECT f.id,DATE_FORMAT(f.creado, '%d/%m/%Y') as creado,SUM(pf.subtotal) AS total,e.nombre AS empleado,f.estado FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id
JOIN productos AS p ON p.id=pf.producto_id
JOIN empleados AS e ON e.id=f.empleado_id
where f.cliente_id = ?
group by f.id,f.creado,e.nombre, f.estado`, [id], function (error, results, fields) {
        if (error) { res.json(error) };
        res.json(results)
        connection.end();
    });
});



router.get('/:id', (req, res) => {
    var id = req.params.id;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("SELECT * FROM clientes WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        res.json(results[0])
        connection.end();
    });
});


router.put('/:id', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("UPDATE clientes SET nombre=?,direccion=?,nit=? WHERE id= ? ", [body.nombre, body.direccion, body.nit, req.params.id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("UPDATED SUCCESFULY")
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("DELETE FROM clientes WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("DELETE SUCCESFULY");
    });
});

module.exports = {
    router
}