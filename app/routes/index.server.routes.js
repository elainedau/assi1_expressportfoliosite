/*
    File Name: index.server.routes.js
    Student Name: Yee Ling Yuen
    Student ID: 301315346
    Date:   09-26-2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.post('/contact', function(req, res, next) {  
  res.redirect('/');
});

module.exports = router;
