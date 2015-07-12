var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('is it working now?');
});
 
app.listen(process.env.PORT || 5000);
console.log("Heyo");
 
module.exports = app;