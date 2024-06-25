// routes/index.js

const express = require('express');
const router = express.Router();

// Import individual route modules
const usersRouter = require('./users');
//const productsRouter = require('./products');
//const authRouter = require('./auth');

// Mount routers
router.use('/users', usersRouter);
//router.use('/products', productsRouter);
//router.use('/auth', authRouter);

module.exports = router;
