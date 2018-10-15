var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
const port = process.env.PORT || 8000;
let server = require('http').Server(app);
//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "./app/dist")));
app.use(bodyParser.json())
app.use("/app", schoolController);

app.listen(port, function () {
    console.log("Started listening on port", 7777);
});
// server.listen(port, () => {
//     console.log("App is running on port " + port);
// });

mongoose.connect("mongodb://Sarangan:saru0528-@ds133113.mlab.com:33113/schoolfinder");
// mongoose.connect("mongodb://localhost/schoolfinder");
