var router = require('express').Router();
var db = require("../../models");

//this will render the homepage
router.get('/', function(req, res){
    console.log("test");
    db.Headline.find({saved: false})
        .sort({date: -1})
        .then(function(dbArticles){
            console.log(dbArticles);
            // res.render takes the name of the file we want to render (this will be home.handlebars)
            // then inject articles into it
            // the articles are coming from dbArticles
            res.render('home', {articles: dbArticles})
        })
});

router.get('/saved', function(req, res){
    db.Headline.find({saved: true})
        .sort({date: -1})
        .then(function(dbArticles){
            // res.render takes the name of the file we want to render (this will be savved.handlebars)
            // then inject articles into it
            // the articles are coming from dbArticles
            res.render('saved', {articles: dbArticles})
        })
});

module.exports = router;