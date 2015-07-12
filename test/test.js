var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Heyo, jenkins is working!', function(done) {
    request(app).get('/').expect('it does not see the deploy file', done);
  });
});