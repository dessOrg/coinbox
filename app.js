var express = require('express');
var app     = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var multer = require('multer');
var fs = require('fs');
var engine = require('ejs-locals');

//set static folder.
app.use(express.static(__dirname + '/assets'));
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

//use ejs-localsfor ejs template
app.engine('ejs', engine);
//view engine
app.set('view engine', 'ejs');

//body-parser and cookie-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(morgan('dev'));

//express validator
app.use(expressValidator({
  errorFormatter:function(param, msg, value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;
    while(namespace.length){
      formParam += '['+ namespace.shift()+ ']';
    }
    return{
      param : formParam,
      msg : msg,
      value : value
    };
  }
}));

//routes middleware
require('./app/routes/index.js')(app);
//require('./app/routes/auth.js')(app, passport);
//require('./app/routes/admin.js')(app, passport);


app.set('port',(8000));
app.listen(app.get('port'),function(){
  console.log('Running on port '+app.get('port'));
});

module.exports = app;
