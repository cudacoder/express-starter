// require packages
const path = require('path');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');

// require helpers
const ErrorHandler = require('./helpers/ErrorHandler');

// routes
const SiteRoute = require('./routes/site');
const UsersRoute = require('./routes/users');

// create new app
const app = express();

// setup view engine
// [!] might not be needed since this is only the server side serving data over API.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// add Middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// add Routes
app.use('/', SiteRoute);
app.use('/users', UsersRoute);

// add error handlers
app.use(ErrorHandler.notFound);
app.use(ErrorHandler.catchAll);

module.exports = app;
