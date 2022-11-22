//jshint esversion:6

const BodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const { dirname } = require("path");
const path = require("path");
const bodyParser = require("body-parser");


const { urlencoded } = require("body-parser");
const client = require("mailchimp-marketing");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
});

app.post("/", function (req, res) {

    var firstName = req.body.firstname;
    var LastName = req.body.lastname;
    var email = req.body.email;

    console.log(firstName);
    
});



client.setConfig({
  apiKey: "8f9ccb1f6c2a05a372c1fce7946fe3b8-us18",
  server: "us18",
});

const run = async () => {
  const response = await client.lists.createList({
    name: "name",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "city",
      country: "country",
    },
    campaign_defaults: {
      from_name: "from_name",
      from_email: "Beulah_Ryan@hotmail.com",
      subject: "subject",
      language: "language",
    },
  });
  console.log(response);
};

run();


app.listen(3000, function () {
    console.log("The app is running on port 3000");
});

//8f9ccb1f6c2a05a372c1fce7946fe3b8-us18