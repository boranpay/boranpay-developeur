const express = require('express');
const AuthuserController = require('../app/Controllers/AuthuserController');


const router = express.Router();

//router.put('/users/:slugin', userAuthMiddleware.checkAuth, UserController.update);


router.post('/login', AuthuserController.login);

module.exports = router;