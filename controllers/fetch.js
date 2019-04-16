// scraper
var db = require("../models");
var scraping = require("../scripts/scraping");

module.exports = {

    extractTitles: function (req, res) {
        return scraping().then(function (articles) {
                return db.Headline.create(articles)
            })
            .then(function (dbHeadline) {
                if (dbHeadline.length === 0) {
                    res.json({
                        message: "No articles to scrape, check back tomorrow!"
                    });
                } else {
                    res.json({
                        message: "added " + dbHeadline.length + " articles."
                    });
                };
            }).catch(function (error) {
                res.json({
                    message: "scrape complete"
                });
            });
    }

};