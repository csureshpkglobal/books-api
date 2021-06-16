var express = require("express");
var apiController = require("./controllers/apiContrller");

var app = express();

app.use("/", express.static(__dirname + "/public/store"));

apiController(app);

app.listen(3000);

module.exports = app;
