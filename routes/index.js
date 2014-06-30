var express = require('express');
var router = express.Router();
var http = require('http');
var needle = require('needle');


/* GET home page. */
router.get('/', function(req, res) {
  something = getFeeds(function(data){
    if (Object.keys(data).length== 4) {
        data = sortObj(data);
        console.dir(data);
        res.render('index', { articles: data  });
    }
  });
});

//Get Main Feed From Fox Sports
function getFeeds(callback){
  var feeds = [{ category : "nfl",url : 'http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=5'},{ category : "featured", url : 'http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=0'},{ category : "mlb", url : "http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=49"}, {category : "nba", url : "http://feeds.foxsports.com/feedout/syndicatedContent?categoryId=73"}]
  var stuff  = {};
    feeds.forEach(function(feed){
    needle.get(feed.url, function(error, response) {
    if (!error) {

        var xml = response.body;
        var json = JSON.stringify(xml);
        var x = JSON.parse(json);
//      console.dir(x);
        var items = x.rss.channel.item;
        var attribution = x.rss.channel;
        var obj = {};
        var key = feed.category
        stuff[key] = { group: items, attr: attribution};
//      stuff.push(obj);
//        console.dir(stuff.nfl);
//      callback({"articles" : items.slice(0,3), attr : attribution});
        callback(stuff);
    }
  });



  });
}

function sortObj(arr){
    // Setup Arrays
    var sortedKeys = new Array();
    var sortedObj = {};

    // Separate keys and sort them
    for (var i in arr){
        sortedKeys.push(i);
    }
    sortedKeys.sort();

    // Reconstruct sorted obj based on keys
    for (var i in sortedKeys){
        sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
    }
    console.log(sortedObj);
    return sortedObj;
}

module.exports = router;
