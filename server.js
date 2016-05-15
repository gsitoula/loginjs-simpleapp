var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var http = require('http');
var jsonFile = require('jsonfile');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000' || '192.168.0.14:3000';


var app = express();

 app.use(bodyParser.json());
// views engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// GET login page
app.get('/', function(req, res) {
    res.render("login");
});

// POST of user.json in users folder
app.post('/end', function(req, res) {

      var obj = req.body;
      console.log(obj);
      res.send(req.body);
      var file = 'public/users/' + "" + obj.name  + "" + '.json';
      jsonFile.writeFile(file, obj, function (sccs , err) {
        if(!err) {
          console.log('has succeded')
        } else {
          console.log(err);
        }
      });

});


// Server Listen
app.listen(port);
