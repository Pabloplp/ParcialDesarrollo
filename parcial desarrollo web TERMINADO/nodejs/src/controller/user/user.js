const Connect = require('../../database/database');
const mysql = require('mysql');
const express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/', (req, res) => {
    var body = req.body;
    console.log(body);
    var connection = mysql.createConnection(Connect.Connect);
    connection.connect();
    connection.query("SELECT * FROM usuarios WHERE nombre= ? ", [body.nombre], function (error, results, fields) {
        if (error) { res.json(error) };
        connection.end();
        try {
           
            if (body.password == results[0].password) {
                console.log(results[0].password);
                let token = jwt.sign({results}, 'clave secreta');
                res.json({ token })
            } else {
                res.json({ mensaje: "USER AND/OR PASSWORD INCORRECT" });
            }
        } catch (error) {
            res.json({ mensaje: error });
        }
    });
});



module.exports = {
    router
}