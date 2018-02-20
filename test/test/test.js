'use strict';

const assert = require('assert');
const request = require('request');
const BASEURL = 'http://localhost:8080/';

describe('CMS', () => {
    describe('GET /', () => {
        it('returns status code 200', done => {
            request.get(BASEURL, (error, response, body) => {

                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});
