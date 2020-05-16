const UsersRouters = require('./users');
const express = require('express');
const routers = express.Router();

routers.use('/users', UsersRouters);

module.exports = routers