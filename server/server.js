var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(process.env.PORT || 8000, function () {
    console.log("Started listening on port", process.env.PORT || 8000);
});

mongoose.connect("mongodb://localhost/schoolfinder");
