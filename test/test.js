var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Heyo, jenkins is working!', function(done) {
    request(app).get('/').expect('the very last time', done);
  });
});