//jshint esversion:6

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/", function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight/Math.pow(height,2);
    res.send("The BMI is :" +result);
})

app.listen(3000, function () {
    console.log("server is running on port 3000.");
});

