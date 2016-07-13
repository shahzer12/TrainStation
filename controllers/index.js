var express = require('express'),
  app = express(),
  router = express.Router(),
 Crawler = require("crawler"),
 cra = require ("./crawler"),
 fs = require('fs'),
  $ = require("jquery");

router.post('/train', function (req, resp) {
  'use strict';
  var obj = {};
 cra.crawler(req);
 function foo(callback) {
  fs.readFile('text.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    obj=JSON.parse(data);
    callback(obj);
  });
}
function myresult(obj){
  resp.send(obj);
}

foo(myresult);

});
module.exports = router;