const express = require('express');
const routerAuth = express.Router();



routerAuth.post('/login', (req,res) => {
    res.send ('login');
});


routerAuth.post('/registro', (req,res) => {
    const { name, email, password } = req.body;

    //validations
    if (!name || !email || !password) {
        res.send ('All fields are required');
    }
    res.send('User created');
});

module.exports = routerAuth;