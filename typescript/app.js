"use strict";
exports.__esModule = true;
var express = require("express");
var user_routes_1 = require("./routes/user.routes");
var app = express();
app.use(express.json());
app.use('/', user_routes_1["default"]);
app.listen(3000, function () { return console.log('Rodando na porta 3000'); });
