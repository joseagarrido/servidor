const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./db/config');
const app = express();

//Configurar CORS
app.use(cors());

dbConnection();

//mean_user
//jg27531984


//rutas
app.get( '/', (req,res)=>{
    res.json({
        ok:true,
        msg:'Hola mund0'
    })
});

app.listen( process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});