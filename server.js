/**
 * Module dependencies.
 */
 
var express = require('express');
var mongo = require('mongoskin');// https://github.com/guileen/node-mongoskin
//var optimist = require("optimist");

var db = mongo.db('mongodb://heroku:PremaShanti@staff.mongohq.com:10045/app5749441?auto_reconnect=true');

var app = module.exports = express.createServer();

var MemoryStore = express.session.MemoryStore;
var sessionStore = new MemoryStore({
    reapInterval: 60000 * 10
});

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
    next();
}

// Configuration
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(allowCrossDomain);
    app.use(express.session({
        store: sessionStore, 
        secret:'htuayreve'
    }));
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/webapp/build/production'));
    app.set('view engine', 'jade');
});

app.configure('development', function(){
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Enable the JSONP feature
app.enable("jsonp callback");

// Get integrations
app.get('/integrations', function(req, res){
    db.collection('integrations').find().toArray(function(errors, posts){
        console.log(posts);
        res.send({
            success: errors?false: true,
            errors: errors,
            integrations: posts
        });
    });
});

// Insert new integration
app.post('/integrations', function(req, res){
    db.collection('integrations').save().toArray(function(errors, posts){
        console.log(posts);
        res.send({
            success: errors?false: true,
            errors: errors,
            integrations: posts // Give new id
        });
    });
});

// Update an existing integration
app.put('/integrations', function(req, res){
    db.collection('integrations').find().toArray(function(errors, posts){
        console.log(posts);
        res.send({
            success: errors?false: true,
            errors: errors,
            integrations: posts
        });
    });
});

// Delete an integration
app.del('/integrations/:id', function(req, res){
    db.collection('integrations').find().toArray(function(errors, posts){
        console.log(posts);
        res.send({
            success: errors?false: true,
            errors: errors,
            integrations: posts // Give deleted id
        });
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});