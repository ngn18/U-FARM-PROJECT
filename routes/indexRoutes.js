const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
// const Image = require('../models/Farmerupload');

// Writing a route
router.get('/index',(req, res) => {
    res.render('index');
});

// Post route
router.post("/index", (req, res) => {
    console.log(req.body);
   res.redirect("index");
  });
  

// Always MUST always be the last line in every routes file.
module.exports = router;
