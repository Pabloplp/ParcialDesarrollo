const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require('./routers/router');
var app = express();

app.use(cors({origin:'*'}));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',router.router);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("http://localhost:3000/");
})