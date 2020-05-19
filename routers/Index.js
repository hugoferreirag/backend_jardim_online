const UsersRouters = require('./users');
const AuthRouters = require('./auth');
const express = require('express');
const routers = express.Router();

routers.use('/users', UsersRouters);
routers.use('/auth', AuthRouters );

module.exports = routers