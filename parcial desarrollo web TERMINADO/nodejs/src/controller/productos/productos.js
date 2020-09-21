const Connect = require('../../database/database');
const mysql = require('mysql');
const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("INSERT INTO productos (nombre,precio,creado_por) VALUES (?,?,?) ", [body.nombre, body.precio, body.creado_por], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("CREATED SUCCESFULY")
    });
});

router.get('/', (req, res) => {
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("SELECT * FROM productos", function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json(results)
    });
});



router.get('/:id', (req, res) => {
    var id = req.params.id;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("SELECT * FROM productos WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        res.json(results[0])
        connection.end();
    });
});


router.put('/:id', (req, res) => {
    var body = req.body;
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("UPDATE productos SET nombre=?,precio=? WHERE id= ? ", [body.nombre, body.precio, req.params.id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("UPDATED SUCCESFULY")
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("DELETE FROM productos WHERE id= ? ", [id], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        res.json("DELETE SUCCESFULY");
    });
});

module.exports = {
    router
}