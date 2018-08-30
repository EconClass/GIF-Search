var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var http = require('http');
var giphy = require('giphy-api')();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});

app.get('/', function (req, res) {
    let s_term = req.query.term || "funny dogs"
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data});
  });
})
// app.get('/', function (req, res) {
//   console.log(req.query.term)
//   var queryString = req.query.term;
//   // ENCODE THE QUERY STRING TO REMOVE WHITE SPACES AND RESTRICTED CHARACTERS
//   var term = encodeURIComponent(queryString);
//   // PUT THE SEARCH TERM INTO THE GIPHY API SEARCH URL
//   var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
//
//   http.get(url, function(response) {
//     // SET ENCODING OF RESPONSE TO UTF8
//     response.setEncoding('utf8');
//
//     var body = '';
//
//     response.on('data', function(d) {
//       // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
//       body += d;
//     });
//
//     response.on('end', function() {
//       // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON
//       var parsed = JSON.parse(body);
//       // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
//       res.render('home', {gifs: parsed.data})
//     });
//   });
// })

// app.get('/hello-gif', function (req, res) {
//   var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
//   res.render('hello-gif.handlebars', {gifUrl: gifUrl})
// })
