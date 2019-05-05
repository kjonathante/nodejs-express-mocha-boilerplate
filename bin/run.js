"use stric";

const config = require("../config");
const log = config.log();

log.info(config.googleId);

const service = require("../server/service")(config);
const http = require("http");
const server = http.createServer(service);

const PORT = process.env.PORT || 3001;

server.listen(PORT);

server.on("listening", function() {
  log.info(
    `listening on ${server.address().port} in ${service.get("env")} mode.`
  );
});
