const express = require('express');
const { userController } = require('../controllers');
const { validateUserData, validateLoginData, authorizeUser } = require('../middlewares');

const usersRouter = express.Router();

usersRouter.post('/', validateUserData, userController.addUser);

usersRouter.get('/', authorizeUser, userController.getAll);

usersRouter.post('/login', validateLoginData, userController.login);

usersRouter.post('/verify', userController.verifyEmail);

module.exports = usersRouter;
