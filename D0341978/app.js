var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');

var index = require('./routes/index');
var store = require('./routes/store');
var register = require('./routes/register');
var login = require('./routes/login');
var intro = require('./routes/intro');
var Tintro = require('./routes/Tintro');
var upload = require('./routes/upload');

var app = express();
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


app.use('/', index);
app.use('/store', store);
app.use('/register', register);
app.use('/login', login);
app.use('/intro', intro);
app.use('/Tintro', Tintro);
app.use('/upload', upload);



app.get('/', function (req, res){
    res.sendFile(__dirname + '/upload.ejs');
});

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('C:\\Users\\Patrick\\WebstormProjects\\Final Project\\public\\images', function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});



console.log("Server is now running...")
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found lol');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
