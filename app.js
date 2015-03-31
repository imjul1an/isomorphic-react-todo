"use strict";

// allow es6 in nodejs/iojs
require("babel/register");

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var logger = require('./source/utils/logger');
var middleware = require('./source/middleware');

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3012;

var app = express();
app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('combined', {stream: logger.stream()}));
app.use(methodOverride());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// application apis
require('./source/api')(app);

// master.html, assets
require('./source/static')(app);

app.use(middleware.errors());

app.listen(port, function () {
 logger.info('auctionata listening on port ' + port + ' ' + env);
});
