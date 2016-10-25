var assert = require('assert');
var question = require('../controller.js');

var data = 'message":"getQuestionRandomByProduct"'

describe('get question', function () {
    it('returns the question', function () {
        var result = question.question ("http://10.8.8.89:8085/", "apimanager");
        assert.equal(result, data)
    
});
});

