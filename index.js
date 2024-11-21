const express = require("express");
const app = express();
const dbConnection = require('./database/config');
require('dotenv').config();


app.use('/auth', require('./router/authRouter'));

dbConnection (); 

app.listen(process.env.PORTLOCAL, () => {
    console.log(`El servidor se está ejecutando en el puerto ${process.env.PORTLOCAL}`);
});
