var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Heyo, jenkins is working!', function(done) {
    request(app).get('/').expect('Heyo, jenkins is working! I think', done);
  });
});