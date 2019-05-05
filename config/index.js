require("dotenv").config();
const bunyan = require("bunyan");

const log = {
  development: () => bunyan.createLogger({name: "App-Name", level: "debug"}),
  production: () => bunyan.createLogger({name: "App-Name", level: "info"}),
  test: () => bunyan.createLogger({name: "App-Name", level: "fatal"}),
};

module.exports = {
  googleId: process.env.GOOGLE_ID,
  appleId: process.env.APPLE_ID,
  appApiToken: process.env.APP_API_TOKEN,
  log: env => {
    if (env) return log[env]();
    return log[process.env.NODE_ENV || "development"]();
  }
};
