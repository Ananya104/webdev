//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("<h1><mark>Buffallo</h1></mark>");
})

app.get("/contact", function (request, response) {
    response.send("<h1><mark>7681964082</h1></mark>");
});
   
app.get("/about", function (request, response) {
        response.send("<h1><mark>This is Ananya Mahajan , a student at guru nanak engg clg..</h1></mark>");
    
})

app.get("/hobbies", function (request, response) {
    response.send("<ul><li>Reading</li><li>Music</li>");
})


    

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
