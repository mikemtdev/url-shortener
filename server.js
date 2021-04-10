const morgan = require('morgan');
const debug = require('debug')('*');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Init app
const app = express();

const defaultPortNumber = 3000;
const port =
  process.env.PORT || defaultPortNumber;

// Env configuration
app.get('env') === 'development' &&
  app.use(morgan('tiny')) &&
  debug('[=== Morgan enabled ===]');

// Lading View Engine
app.set(
  'views',
  path.join(__dirname, '/app/views')
);
app.set('view engine', 'pug');

// Routes Imports
const shorturl = require('./app/routes/shorturl');
const home = require('./app/routes/home');

// Middlewares
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
// configurations
app.use('/', home);
app.use('/shorturl', shorturl);

// Get short url and redirects to actual url
// Post actual url to db and returns uud as shord url

app.listen(
  port,
  console.log(`Runing on port: ${port}`)
);
