const { default: mongoose } = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

/**
 * Function for counting connection to mongodb
 */
const connectionCount = () => {
  const numberOfConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numberOfConnections}`);
};

/**
 * Function for checking over load
 */
const overloadChecking = () => {
  // Monitor every 5 seconds
  setInterval(() => {
    const numberOfConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Active connections: ${numberOfConnections}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024}Mb`);
    // Example: maximum number of connections based on number of cores
    const maxConnections = numCores * 5;
    if (numberOfConnections > maxConnections) {
      console.log('Connection overload detected');
      // notify the system
    }
  }, _SECONDS);
};

module.exports = {
  connectionCount,
  overloadChecking,
};
