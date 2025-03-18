const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const path = require("path");
const cron = require("node-cron");
const mongoose = require("mongoose");
var cors = require("cors");
var fs = require("fs");
const { parseConfig } = require("./config");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

var apiport = 5002;

var options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};

const config = {
  ...parseConfig,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + "/cloud/main.js",
  liveQuery: {
    classNames: [
      "OnlineAgentLists",
      "AgentMessageHistories",
      "AgentStatusHistories",
      "UserLoginHistories",
    ], // List of classes to support for query subscriptions
  },
};
console.log(`Parse config: `, config);

const app = express();

app.use(cors());
app.use(cors({ origin: "*" }));

// Serve static assets from the /public folder
app.use("/", express.static(path.join(__dirname, "/wallboard")));

// Serve the Parse API on the /parse URL prefix
const mountPath = "/api";
const api = new ParseServer(config);

// 3. Start up Parse Server asynchronously
api.start();

app.use(mountPath, api.app);

var httpsServer = require("https").createServer(options, app);

httpsServer.listen(apiport, function () {
  console.log("Wallboard API (https) running on port " + apiport + ".");
});

ParseServer.createLiveQueryServer(httpsServer);
