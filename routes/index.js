var express = require('express');
var router = express.Router();
var http = require('http');
var needle = require('needle');


/* GET home page. */
router.get('/', function(req, res) {
  something = getFeeds(function(data){
    res.render('index', { articles: data  });
  });
  // console.log(something)
  // res.render('index',{articles : []})
});

function getFeeds(callback){
needle.get('http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=5', function(error, response) {
  if (!error)

    var xml = response.body;
    var json =JSON.stringify(xml);
    x = JSON.parse(json);


    // items.forEach(function(item){
       // var link = item.link;
       // var title = item.title;
       // var pubDate = item.pubDate;
       // var category = item.category;
       // var description = item.description;
       // console.dir(category);
    // });
    items = x.rss.channel.item;
    console.log(items[7].enclosure.$.url)
    callback({"articles" : items});
    // return items;

});
}



module.exports = router;
