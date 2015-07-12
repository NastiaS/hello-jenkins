var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Heyo, jenkins is working! I think');
});
 
app.listen(process.env.PORT || 5000);
console.log("Heyo");
 
module.exports = app;