const express = require("express");
const app = express();
require('dotenv').config();


// #creamos  un endpoint 
app.get('/saludo', (req,res) => {
		res.send ('Hola saludos desde el backend');
});





app.listen(process.env.PORTLOCAL, () => {
    console.log(`El servidor se está ejecutando en el puerto ${process.env.PORTLOCAL}`);
});
