const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
const ProduceUpload = require('../models/Farmerupload');

// Writing a get route
router.get('/poultryproducts', async (req, res) => {
    try {
		// const sort = {_id:-1}
		let products = await ProduceUpload.find().sort({$natural:-1});
		res.render("poultryproducts", { goods:products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
    // res.render('products');
});

// Post route
router.post("/poultryproducts", (req, res) => {
    console.log(req.body);
   res.redirect("poultryproducts");
  });

// Writing a get route
router.get('/hortproducts', async (req, res) => {
    try {
		// const sort = {_id:-1}
		let products = await ProduceUpload.find().sort({$natural:-1});
		res.render("hortproducts", { goods:products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
    // res.render('hortproducts');
});

// Post route
router.post("/hortproducts", (req, res) => {
    console.log(req.body);
   res.redirect("hortproducts");
  }); 
  
// Writing a get route
router.get('/dairyproducts', async (req, res) => {
    try {
		// const sort = {_id:-1}
		let products = await ProduceUpload.find().sort({$natural:-1});
		res.render("dairyproducts", { goods:products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
    // res.render('dairyproducts');
});

// Post route
router.post("/dairyproducts", (req, res) => {
    console.log(req.body);
   res.redirect("dairyproducts");
  });    

// Always MUST always be the last line in every routes file.
module.exports = router;
