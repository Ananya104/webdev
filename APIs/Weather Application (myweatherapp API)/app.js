//jshint esversion:6

const express = require("express");
const https = require("https");
const { dirname } = require("path");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    });

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "844b99d9dd969913bdb578086743b4a4";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?id=524901&q=" +query+"&units=" + units + "&appid="+ apiKey;
    
    
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
           
            res.set("Content-Type", "text/html");
            res.write("<h2>The weather currently is " + weatherDescription + "</h2>");
            res.write("<h2>The temperature in " +query+ " is " + temp + " degree celcius.</h2>");
            res.write("<img src=" + imageURL + ">");
            res.send();


           

        });
        
    });
    })

    

app.listen(3000, function () {
    console.log("The server is running on port 3000.");
});

