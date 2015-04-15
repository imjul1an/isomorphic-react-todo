var moment = require('moment');
var winston = require('winston');
var Elasticsearch = require('winston-elasticsearch');

var stub = require('./stub');

var winstonConfig = {
  levels: { trace: 0, debug: 1, info: 2, warning: 3, error: 4, fatal: 5 },
  colors: { trace: 'grey', debug: 'cyan', info: 'white', warning: 'yellow', error: 'red', fatal: 'red' }
};

winston.addColors(winstonConfig.colors);
winston.setLevels(winstonConfig.levels);

var log = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      colorize: true,
      prettyPrint: true,
      silent: false,
      timestamp: function () {
        return moment().format('hh:mm:ss l');
      }
    }),
    new Elasticsearch({ level: 'info' })
  ]
});

var logger = {
  success: function (message) {
    message = typeof message === 'string' ? message : JSON.stringify(message);
    log.trace(message);
  },

  warning: function (message) {
    message = typeof message === 'string' ? message : JSON.stringify(message);
    log.warning(message);
  },

  error: function (message) {
    message = typeof message === 'string' ? message : JSON.stringify(message);
    log.error(message);
  },

  fatal: function (message) {
    message = typeof message === 'string' ? message : JSON.stringify(message);
    log.log(message);
  },

  info: function (message) {
    message = typeof message === 'string' ? message : JSON.stringify(message);
    log.info(message);
  },

  stream: function () {
    var me = this;

    return {
      write: function (message) {
        me.info(message);
      }
    };
  }
};

module.exports = (function () {
  var env = process.env.NODE_ENV || 'development';
  if (env === 'test') {
    return stub(logger, ['stream']);
  }

  return logger;
})();