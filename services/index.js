var http = require('http'),
    express = require('express'),
    session = require('./routes/sessions'),
    project = require('./routes/projects');

var app = express();
app.set('port', process.env.PORT || 3000);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);
app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', function(req, res) {
    res.send('Let\'s create some awesome product experience');
});

app.get('/sessions', session.findByUser);
app.get('/sessions/:id', session.findById);
app.put('/sessions/:id/*', session.updateSession);
app.post('/sessions', session.save);

app.get('/projects', project.getAll);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server just started its ride! ' + app.get('port'));
});