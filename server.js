/**
 * Module dependencies.
 */
 
var express = require('express');
var mongo = require('mongoskin');// https://github.com/guileen/node-mongoskin
//var optimist = require("optimist");

var db = mongo.db('mongodb://heroku:PremaShanti@staff.mongohq.com:10045/app5749441?auto_reconnect=true');

//Temporay user
var user = null;
db.collection('users').findOne({name:  'test'},function(errors, results){
    if(errors) throw errors;
    user = results;
    console.log(user);
});

var app = express.createServer();

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
    app.use(express.static(__dirname + '/production'));
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
    console.log("Integration + user id: " + user._id)
    db.collection('integrations').find({user_id: user._id}).toArray(function(errors, results){
        res.send({
            success: errors?false: true,
            errors: errors,
            integrations: results
        });
    });
});

// Get a specific integration
// Provide full details with maybe stats (TODO)
app.get('/integrations/:id', function(req, res){
    db.collection('integrations').findOne(
        {_id:  db.bson_serializer.ObjectID.createFromHexString(req.params.id)},
        function(errors, results){
            console.log(results);
            res.send({
                success: errors?false: true,
                errors: errors,
                integrations: results
            });
        }
    );
});

//
/** Insert new integration and return the generated id
  *
  * Requires:
  * {
  *     title: sometitle,             //mandatory
  *     description: somedescription, //optional
  *     timestamp: sometimestamp,     //optional    time of the start
  * }
  *
  * Return:
  * {
  *     success: boolean,
  *     errors: string array || null,
  *     integration: {
  *         id: newid
  *     }
  * }
  *
  **/
app.post('/integrations', function(req, res){
    var title = req.body.title,
        description = req.body.description || "",
        timestamp = req.body.timestamp || (new Date()).getTime();

    console.log(title);

    if(title){

        db.collection('integrations').insert(
            {
                title: title,
                description: description,
                timestamp: timestamp,
                user_id: user._id
            },
            function(errors, result) {
                res.send({
                    success: errors?false: true,
                    errors: errors,
                    integrations: {
                        id: result[0]._id
                    }
                });
            }
        );
    } else {

        res.send({
            success: false,
            errors: ["Title must be set and cannot be null"]
        });
    }
});

/** Update an existing integration
  * Insert new row:
  * - Comments (during)
  * - Feedback (after)
  * - Total Mask Duration (ms)      (optional)
  * - Total Happy Duration (ms)     (optional)
  * - (MaskIntegration)
  * - (HappyFaceIntegration)
  *
  * 4 options in this request:
  * - Add/Update a comment (during integration)
  * - Add/Update time spent on a mask (during integration)
  * - Add/Update the feedback + total duration (end of integration)
  * - Add/Update time spent on a mask (during integration)
  *
  * Return:
  * {
  *     success: boolean,
  *     errors: string array || null
  * }
  *
  **/
app.put('/integrations/:id', function(req, res){

    if(req.body.comment || req.body.feedback || req.body.duration){

        db.collection('integrations').update(
            {_id: db.bson_serializer.ObjectID.createFromHexString(req.params.id)},
            { $set: {
                comment: req.body.comment,
                feedback: req.body.feedback,
                duration: req.body.duration
            }},
            function(errors, result) {
                res.send({
                    success: errors? false: true,
                    errors: errors
                });
            }
        );
    } else {
        res.send({
            success: false,
            errors: ['Should contains value for comment or/and feedback)']
        });
    }
});

// Delete an integration
app.del('/integrations/:id', function(req, res){
    db.collection('integrations').remove(
        {_id: db.bson_serializer.ObjectID.createFromHexString(req.params.id)},
        function(errors, result) {
            res.send({
                success: errors?false: true,
                errors: ["Not deleted: "+ errors]
            });
        }
    );
});


// Get all masks
app.get('/masks', function(req, res){
    db.collection('masks').find().toArray(function(errors, results){
        console.log(results);
        res.send({
            success: errors?false: true,
            errors: errors,
            masks: results
        });
    });
});

// Get a specific masks
// Provide all details + maybe stats (TODO)
app.get('/masks/:id', function(req, res){
    db.collection('masks').findOne({_id:  parseInt(req.params.id)}, function(errors, results){
        console.log(results);
        res.send({
            success: errors?false: true,
            errors: errors,
            masks: results
        });
    });
});

// Get all masks integration
app.get('/maskintegrations', function(req, res){
    db.collection('maskIntegrations').find({user_id: user._id}).toArray(function(errors, results){
        console.log(results);
        res.send({
            success: errors?false: true,
            errors: errors,
            maskintegrations: results
        });
    });
});

// Get all masks integration for a specific integration
app.get('/maskintegrations/:id', function(req, res){
    db.collection('maskIntegrations').findOne(
        {_id:  db.bson_serializer.ObjectID.createFromHexString(req.params.id), user_id: user._id},
        function(errors, results){
            console.log(results);
            res.send({
                success: errors?false: true,
                errors: errors,
                maskintegrations: results
            });
        }
    );
});

// Add a mask integrations
app.post('/maskintegrations', function(req, res){

    var mask = req.body; 
    if(mask.mask_id && mask.integration_id){
        db.collection('maskIntegrations').insert(
            {
                integration_id: mask.integration_id,
                mask_id: mask.mask_id,
                duration: mask.duration,
                user_id: user.id
            },
            function(errors, result) {

                res.send({
                    success: errors?false: true,
                    errors: errors,
                    maskintegrations: {
                        id: result[0]._id
                    }
                });
            }
        );

    } else {
        res.send({
            success: false,
            errors: ["Mask params missing: mask must contain mask_id, integration_id & duration"]
        });
    }

});

// Update a mask integration with mask integration id
// Used to update the duration
app.put('/maskintegrations/:id', function(req, res){
    var mask = req.body;
    if(mask.duration){
        db.collection('maskIntegrations').update(
            {
                _id:   db.bson_serializer.ObjectID.createFromHexString(req.params.id) // mask_integration id
            },
            {
                $set: {
                    duration: mask.duration,
                    comment: mask.comment
                }
            },
            function(errors) {
                res.send({
                    success: errors?false: true,
                    errors: errors
                });
            }
        );

    } else {
        res.send({
            success: false,
            errors: ["Mask params missing: mask must contain mask_id, integration_id & duration"]
        });
    }
});




// AUTHENTICATION START


// Login
app.get('/login', function(req, res){
    console.log("Login")
    res.send({
        success: true,
        params: req.params
    });
});

// Redirect
app.get('/logged', function(req, res){
    console.log("Logged")
    res.send({
        success: true,
        params: req.params
    });
});

// Logout
app.get('/logout', function(req, res){
    console.log("Logout")
    res.send({
        success: true,
        params: req.params
    });
});

// AUTEHTICATION STOP


var port = process.env.PORT || 3000;
app.listen(port, function(){
    //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});