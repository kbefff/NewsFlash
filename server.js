const express = require('express');
const mongojs = require('mongojs');
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = 3000;

// Initialize Express
const app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/newsflash", { useNewUrlParser: true });



// // Routes

// // A GET route for scraping the Sceince Daily website
// app.get("/", function (req, res) {
//     // First, we grab the body of the html with axios
//     axios.get("https://www.sciencedaily.com/news/earth_climate/environmental_science/").then(function (response) {
//         // Then, we load that into cheerio and save it to $ for a shorthand selector
//         var $ = cheerio.load(response.data);

//         // Now, we grab every h2 within an article tag, and do the following:
//         $("h3.latest-head").each(function (i, element) {
//             // Save an empty result object
//             const result = {};

//             // Add the text and href of every link, and save them as properties of the result object
//             result.title = $(this)
//                 .children("a")
//                 .text();
//             result.link = $(this)
//                 .children("a")
//                 .attr("href");

//             // Create a new Article using the `result` object built from scraping
//             db.Article.create(result)
//                 .then(function (dbArticle) {
//                     // View the added result in the console
//                     console.log(dbArticle);
//                 })
//                 .catch(function (err) {
//                     // If an error occurred, log it
//                     console.log(err);
//                 });
//         });

//         // Send a message to the client
//         res.send("Scrape Complete");
//     });
// });

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});