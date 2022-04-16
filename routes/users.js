const express = require('express');
const { userController } = require('../controllers');
const { validateUserData, validateLoginData } = require('../middlewares');

const usersRouter = express.Router();

usersRouter.post('/', validateUserData, userController.addUser);

usersRouter.post('/login', validateLoginData, userController.login);

module.exports = usersRouter;
