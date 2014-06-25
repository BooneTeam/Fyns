var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  router.get("http://www.scorespro.com/rss2/live-baseball.xml", function(req,res){
  	console.log("++++++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+")
  	console.log(res);
  })
  res.render('index', { title: 'Express' });
});



module.exports = router;
