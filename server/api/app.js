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
let Request = require("request");

// Setup server
var app = express();
var server = http.createServer(app);

app.set('appPath', '/');
app.use(express.static(app.get('appPath')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/getApi', function (req, res) {
  return makeGetRequest("http://-----------------------------yourIp---------------------------:80")
    .then(data => {
      data = '<h1>' + data.replace('<h1>', '').replace('!</h1>', '') + ' across Api!!!</h1>';
      return res.send(data);
    })
    .catch(error => {
      console.log(error);
      return res.end();
    });

});

app.get('/download', function (req, res) {
  console.log('api');
  return makeGetRequest("http://-----------------------------yourIp---------------------------:80")
    .then(data => {
      data = '<h1>' + data.replace('<h1>', '').replace('!</h1>', '') + ' across Api and download route!!!</h1>';
      return res.send(data);
    })
    .catch(error => {
      console.log(error);
      return res.end();
    });

});

function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    Request.get(url,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject(error);
        }
      }
    );
  });
}
// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, %t', config.port, config.ip);
  });
}

setImmediate(startServer);