/**
 * Created by oliverg on 20/07/2016.
 */
// var webdriverio = require('webdriverio');
// var options = {
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// };
//
// webdriverio
//     .remote(options)
//     .init()
//     .url('http://localhost:8777/feedback')
//     .getTitle().then(function(title) {
//     console.log('Title was: ' + title);
// })
//     .end();
var expect = require('chai').expect;
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};


// describe('Thank you page', () => {
//     it('should load thankyou page when all fields are completed', (done) => {
        webdriverio
            .remote(options)
            .init()
            .url('http://localhost:8700/feedback')
            .setValue('#firstname', 'Olivier')
            .setValue('#lastname', 'Gorrie')
            .click('#button')
            .getUrl('url').then(function(url) {
            console.log(url)
        })
            .end();
//     });
// });