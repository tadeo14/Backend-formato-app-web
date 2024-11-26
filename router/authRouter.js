const express = require('express');
const routerAuth = express.Router();

const { createUser, getUser } = require('../controllers/authControllers');



routerAuth.post('/login', getUser);


routerAuth.post('/registro',createUser );

module.exports = routerAuth;