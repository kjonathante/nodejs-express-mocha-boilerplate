"use strict";

const express = require("express");
const service = express();

service.get("/service/:location", (req, res) => {
  res.json({ result: req.params.location });
});

service.put("/service/:intent/:port", (req, res) => {
  const serviceIntent = req.params.intent;
  const servicePort = req.params.port;

  const serviceIp = req.connection.remoteAddress.includes("::")
    ? `[${req.connection.remoteAddress}]`
    : req.connection.remoteAddress;

  res.json({ result: `${serviceIntent} at ${serviceIp}:${servicePort}` });
});

module.exports = service;
