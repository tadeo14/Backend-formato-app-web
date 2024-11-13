const express = require("express");
const app = express();



// #creamos  un endpoint 
app.get('/saludo', (req,res) => {
		res.send ('Hola saludos desde el backend');
});





app.listen(4000, () => {
    console.log('El servidor se está ejecutando en el puerto 4000');
});
