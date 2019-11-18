// //require winston
 var winston= require('winston');

var options = {
    file: {
      level: 'info',
      name: 'file.info',
      filename: `./toolchain.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 100,
      colorize: true,
    }}
const logger = module.exports =winston.createLogger({
    transports: [
        new (winston.transports.File)(options.file)
    ]
});

logger.info('starting log file');