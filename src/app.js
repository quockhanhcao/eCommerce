const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// Init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init db

// Init routers
app.get('/', (req, res, next) => {
  const strCompress = 'Welcome to this page';
  return res.status(200).json({
    message: 'OK',
    metadata: strCompress.repeat(10000),
  });
});

// Handle errors

module.exports = app;
