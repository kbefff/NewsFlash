const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.sciencedaily.com/news/earth_climate/environmental_science/').then(function(res){
    const $ = cheerio.load(res.data);
    const results = [];

    $('h3.latest-head').each(function(i, el){
        var link = $(el).children().attr('href');
        var title = $(el).children('a').text();

        // var description = $(el).
        results.push({
            title: title,
            link: link
        })
    })
console.table(results);



})