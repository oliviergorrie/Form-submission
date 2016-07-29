
//var mocha = require('mocha');

var expect = require('chai').expect;
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};



describe('Feedback page', () => {

    it('Title', (done) => {

        webdriverio
            .remote(options)
            .init()
            .url('http://localhost:8700/feedback')
            .getTitle().then(function(title) {
                console.log('Title was: ' + title);
                expect(title).to.be.equal('Feedback')
                done();
            })
            .end();
    });

    it('Body', (done) => {

            webdriverio
                .remote(options)
                .init()
                .url('http://localhost:8700/feedback')
                .getSource().then(function(body) {
                    expect(body).to.contain('firstname', 'lastname');
console.log('body', body);
                    done();
                })
                .end();
        });
});


describe('Input data', () => {
    let browser;
    beforeEach(() => {
        console.log('this works');
        browser =  webdriverio
            .remote(options)
            .init()
            .url('http://localhost:8700/feedback')
    });

    it('should return error if lastname not completed', (done) => {

        browser
            .setValue('#firstname', 'Olivier')
            .click('#button')
            .getHTML('body').then(function(body) {
                expect(body).to.contain('All fields must be completed.')

                done();
                })
            .end();
           });

    it('should return error if firstname not completed', (done) => {

        browser
            .setValue('#lastname', 'Gorrie')
            .click('#button')
            .getHTML('body').then(function(body) {
            expect(body).to.contain('All fields must be completed.')

            done();
        })
            .end();
    });
   
    });



describe('Thank you page', () => {
   it('should load thankyou page when all fields are completed', (done) => {
       webdriverio
           .remote(options)
           .init()
           .url('http://localhost:8700/feedback')
           .setValue('#firstname', 'Olivier')
           .setValue('#lastname', 'Gorrie')
           .click('#button')
           .getUrl('url').then(function(url) {
           expect(url).to.contain('http://localhost:8700/thankyou')
           done();
       })
           .end();
   });
});




