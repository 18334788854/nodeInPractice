const winston = require("winston");
var logger = winston.createLogger({transports:[new winston.transports.Console()]});
const colors = require("colors");

logger.log("info","hello!");
logger.info(colors.green("hello again!"),{timestamp:Date.now(),pid:process.pid});
