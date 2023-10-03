/*
    File Name: server.js
    Student Name: Yee Ling Yuen
    Student ID: 301315346
    Date:   09-26-2023
*/

const path=require('path');

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

    var app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));

} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use('/', require(path.join(__dirname, 'app/routes/index.server.routes.js')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
