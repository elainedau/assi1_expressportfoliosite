/*
    File Name: index.server.controller.js
    Student Name: Yee Ling Yuen
    Student ID: 301315346
    Date:   09-26-2023
*/

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};

  
  