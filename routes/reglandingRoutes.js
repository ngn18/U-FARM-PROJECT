const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
// const Image = require('../models/Farmerupload');

// Writing a route
router.get('/reglanding',(req, res) => {
    res.render('reglanding');
});

// Post route
router.post("/reglanding", (req, res) => {
    console.log(req.body);
   res.redirect("reglanding");
  });
  

// Always MUST always be the last line in every routes file.
module.exports = router;
