const { default: mongoose } = require('mongoose');
const { connectionCount } = require('../helpers/check.connection');
const { dbConfig } = require('../configs/config.mongodb');
const connectionString = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

class Database {
  constructor() {
    this.connect();
  }

  async connect(type = 'mongodb') {
    try {
      await mongoose.connect(connectionString);
      console.log('Connected to mongodb');
    } catch (error) {
      console.log(error);
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('Database disconnect successfully');
    } catch (error) {
      console.log('Error during database disconnect: ', error);
    }
  }
}

// const mongoInstance = Database.getInstance();
module.exports = Database;
