var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('it does not see the deploy file');
});
 
app.listen(process.env.PORT || 5000);
console.log("Heyo");
 
module.exports = app;