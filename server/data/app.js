/**
 * Main application file
 */

'use strict';

let express = require('express');
let config = require('./config');
let http = require('http');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');

// Setup server
var app = express();
var server = http.createServer(app);

app.set('appPath',  '/');
app.use(express.static(app.get('appPath')));
app.use(morgan('dev'));
//app.set('views', config.root + '/server/views');
//app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/getData', function(req, res) {
  res.send('<h1>Hello with your Data!</h1>');
});

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, %t', config.port , config.ip);
  });
}

setImmediate(startServer);

// Expose app
//exports = module.exports = app;