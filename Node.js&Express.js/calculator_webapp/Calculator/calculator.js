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
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is :" +result);
})

app.listen(3000, function () {
    console.log("server is running on port 3000.");
});

