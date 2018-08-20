var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.send('greetings.handlebars', {name: name});
})

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
// app.get('/', function (req, res) {
//   res.send('home')
// })