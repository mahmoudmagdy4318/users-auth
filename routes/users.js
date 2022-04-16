const express = require('express');
const { addUser } = require('../controllers/users');
const { validateUserData } = require('../middlewares');

const usersRouter = express.Router();

usersRouter.post('/', validateUserData, addUser);

module.exports = usersRouter;
