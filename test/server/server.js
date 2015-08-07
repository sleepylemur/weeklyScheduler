var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var request = require('supertest');
var app = require('../../src/server/server.js');


describe('server.js', function() {
  describe('GET /', function() {
    it('should return 200', function(done) {
      request(app)
        .get('/')
        .accept('text/html')
        .expect('Content-Type',/text\/html/)
        .expect(200, done);
    });
  });
});
