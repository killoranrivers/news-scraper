const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const cheerio = require("cheerio");

const models = require("./models/");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsDB";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", function(error) {
    console.log(error);
});
db.once("open", function() {
  console.log(`Connected to mongoDB!`);
});



app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});

