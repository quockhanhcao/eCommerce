const database = require('./src/dbs/init.mongo');
const app = require('./src/app');
const { default: mongoose } = require('mongoose');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server exit');
    // database.disconnect();
    mongoose.disconnect();
  });
  // notify something, later
});
