const express = require('express');
const routerAuth = express.Router();



routerAuth.post('login', (req,res) => {
    res.send ('login');
    });


module.exports = routerAuth;