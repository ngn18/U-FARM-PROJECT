const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
// const Image = require('../models/Farmerupload');

// Writing a get route
router.get('/products',(req, res) => {
    res.render('products');
});

// Post route
router.post("/products", (req, res) => {
    console.log(req.body);
   res.redirect("products");
  });

// Writing a get route
router.get('/vegproducts',(req, res) => {
    res.render('vegproducts');
});

// Post route
router.post("/vegproducts", (req, res) => {
    console.log(req.body);
   res.redirect("vegproducts");
  }); 
  
// Writing a get route
router.get('/animalproducts',(req, res) => {
    res.render('animalproducts');
});

// Post route
router.post("/animalproducts", (req, res) => {
    console.log(req.body);
   res.redirect("animalproducts");
  });    

// Always MUST always be the last line in every routes file.
module.exports = router;
