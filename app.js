var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('the very last time');
});
 
app.listen(process.env.PORT || 5000);
console.log("Heyo");
 
module.exports = app;