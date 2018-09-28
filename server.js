// Initial Conditions
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const giphy = require('giphy-api')();
const port = process.env.PORT || 3000;

// Routes
app.get('/', function (req, res) {
    const searchterm = req.query.term || "funny dogs"
    giphy.search(searchterm, function (err, response) {
        res.render('home', {gifs: response.data});
    });
});

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Listen
app.listen(port, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
