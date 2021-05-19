var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//const Freezeframe = require('freezeframe');


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req,res) {
    res.render('pages/landing',{
        my_title: "landing page",
        data: '',
    });
});

app.get('/landing', function(req, res) {
    res.render('pages/landing', {
        my_title: 'landing page',
    });
});

app.get('/combos', function(req, res) {
    res.render('pages/combos', {
        my_title: 'combos page',
    });
});

app.get('/kill_confirms', function(req, res) {
    res.render('pages/kill_confirms', {
        my_title: 'kill confirms',
    });
});

app.get('/matchups', function(req, res) {
    res.render('pages/matchups', {
        my_title: 'kill confirms',
    });
});



module.exports = app.listen(3000);
console.log('3000 is the magic port');