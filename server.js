var express = require('express'),
  body_parser = require('body-parser'),
  path = require('path'),
  app = express(),
  router = express.Router();


// knex = require('./config/knex');

//All html files in View folder.

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/views')));

// search all the static files in public
app.use(express.static(path.join(__dirname + '/public')));

// Parse application/x-www-form-urlencoded.
app.use(body_parser.urlencoded({extended: false}));

// Parse application/Json
app.use(body_parser.json());

// Middleware integration later

// by default will go in /controllers/index.js
// router.get('/something', function (req, res) {
//   'use strict';
//   res.send("Hello");
// });

app.use(require('./controllers'));
app.listen(3000);

console.log('Running at port 3000');
