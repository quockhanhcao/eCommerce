require('dotenv').config()

const dev = {
  appConfig: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  dbConfig: {
    port: process.env.DEV_DB_PORT || 27017,
    host: process.env.DEV_DB_HOST || 'localhost',
    name: process.env.DEV_DB_NAME || 'shopDev',
  },
};

const prod = {
  appConfig: {
    port: process.env.PROD_APP_PORT,
  },
  dbConfig: {
    port: process.env.PROD_DB_PORT || 27017,
    host: process.env.PROD_DB_HOST || 'localhost',
    name: process.env.PROD_DB_NAME || 'shopProd',
  },
};

const config = { dev, prod };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
