"use strict";

const express = require("express");
const service = express();

module.exports = config => {
  service.get("/service/:location", (req, res) => {
    res.json({ result: req.params.location });
  });

  service.put("/service/:intent/:port", (req, res) => {
    if (req.get("X-APP-API-TOKEN") !== config.appApiToken) {
      return res.sendStatus(403);
    }

    if (!req.get("X-APP-SERVICE-TOKEN")) {
      return res.sendStatus(400);
    }
    
    const serviceIntent = req.params.intent;
    const servicePort = req.params.port;

    const serviceIp = req.connection.remoteAddress.includes("::")
      ? `[${req.connection.remoteAddress}]`
      : req.connection.remoteAddress;

    res.json({ result: `${serviceIntent} at ${serviceIp}:${servicePort}` });
  });

  return service;
};
