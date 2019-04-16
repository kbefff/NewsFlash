# NewsFlash

This is a web app that lets users view and leave comments on the latest news. Articles are scraped from "" using Mongoose and Cheerio. 

Whenever a user visits my site, the app will scrape stories "" and display them for the user. Each scraped article is saved to my application database. The app shows each article's headling, summary and url.

Users are also be able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles. Users are able to delete comments left on articles. All stored comments are visible to every user.