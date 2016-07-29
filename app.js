/**
 * Created by oliverg on 18/07/2016.
 */

var express = require("express");
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');



var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('.hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}));
app.set('view engine', '.hbs');

app.get('/feedback', function(req,res){
    res.render('feedback')
});

app.post('/thankyou', function (req,res) {

    console.log('first name: '+req.body.firstname, '/', 'last name: '+req.body.lastname);

    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    };

    if(!validateNames(req.body.firstname, req.body.lastname)) {

         res.send("All fields must be completed.")
    }
    else {
        res.render('thankyou', data);
    }
});

function validateNames(firstname, lastname) {
    if (firstname == '' || lastname == '') {
        return false;
    }
    if (firstname !== '' || lastname !== '') {
        return true;
    }
};
    

module.exports = {
    validator: validateNames
}

console.log('loaded...');

app.listen(8700);