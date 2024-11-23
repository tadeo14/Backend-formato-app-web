const express = require('express');
const routerAuth = express.Router();

const { createUser } = require('../controllers/authControllers');



routerAuth.post('/login', (req,res) => {
    res.send ('login');
});


routerAuth.post('/registro',createUser );

module.exports = routerAuth;