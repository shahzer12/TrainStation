var express = require('express'),
  app = express(),
  router = express.Router();
var Crawler = require("crawler");
var fs = require('fs');
 var $ = require("jquery");


exports.crawler = function(req){
var arr=[];
var l=0;
  console.log(req.body);
  var train = req.body.num;
 var u = 'https://www.cleartrip.com/trains/'+train;
var c = new Crawler({
    maxConnections : 1,
  //  This will be called for each crawled page
    callback : function (error, result, $) {
      if(l==1)
        return;

        if(result){
          var html = $.parseHTML(result.body);
          var d= $(html).find( '.stationName' );

          for (var i=0; i<d.length; i++) {
            var s=i.toString();
          arr.push((d[s].children)[1].children[0].data);
          }

          fs.writeFile("text.json", JSON.stringify({obj : arr}), function(err) {
            if(err) {
              return console.log(err);
            }
             console.log("The file was saved!");
          });
          l=1;
          return;
        }
     }
  });
// Queue just one URL, with default callback
if(l==1)
return;
c.queue(u);

};
