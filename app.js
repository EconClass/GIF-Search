// Initial Conditions
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var http = require('http');
var giphy = require('giphy-api')();
var port = process.env.PORT || 3000;

// Routes
app.get('/', function (req, res) {
    let searchterm = req.query.term || "funny dogs"
    giphy.search(searchterm, function (err, response) {
        res.render('home', {gifs: response.data});
    });
})

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.listen(port, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
