var application = require('../../app.js');
var chai = require('chai');
var assert = chai.assert;


describe('Name validator', function() {

    it('should fail if firstname is empty', function(){
        var result = application.validator('Olivier', '');
        assert.isFalse(result);
    });
    
    it('should fail if lasttname is empty', function(){
        var result = application.validator('', 'Gorrie');
        assert.isFalse(result);
    });
    
    it('should render thank you if all fields are completed', function () {
        var result = application.validator('Olivier', 'Gorrie');
        assert.isTrue(result);
    });
});