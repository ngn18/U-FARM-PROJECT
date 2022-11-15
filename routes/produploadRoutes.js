const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const ProduceUpload = require('../models/Farmerupload');
// const Registering = require('../models/User');

// image upload
// diskStorage is a method that accesses your computer.
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage })


// Get route for uploading produce
// router.get('/produceupload', async (req, res) => {
//     let urbanFarmerList = await Registering.find({role: 'urbanfarmer'});
//     res.render('produceupload', {urbanfarmers:urbanFarmerList});
// });

router.get('/produceupload', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  res.render('produceupload', {currentUser: req.session.user});
});

// Post route for image upload
router.post('/produceupload', connectEnsureLogin.ensureLoggedIn(), upload.single('image'), async (req, res, next) => {
    console.log(req.file);
    try {
        const produce = new ProduceUpload(req.body);
        produce.image = req.file.path;
        console.log('This is my produce', produce);
            await produce.save();
               res.redirect('/index')
        }      
        catch (error){
         res.status(400).send('Product not saved');
         console.log(error)
    }
});

//Getting/Displaying produce list-------
router.get("/producelist", async (req, res) => {
	try {
		// const sort = {_id:-1}
		let products = await ProduceUpload.find().sort({$natural:-1});
		res.render("producelist", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

//Produce update get and post route
router.get('/produce/update/:id', async (req, res) => {
	try {
		const updateProduct = await ProduceUpload.findOne({_id:req.params.id})
    res.render('produce-update', {product:updateProduct});
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

router.post('/produce/update', async (req, res) => {
	try {
		await ProduceUpload.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/producelist');
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

//Produce delete Route
router.post('/produce/delete', async (req, res) => {
	try {
		await ProduceUpload.deleteOne({_id:req.body.id});
    res.redirect('back');
	} catch (error) {
		res.status(400).send('Sorry we were unable to delete product');
	}
});

// Always MUST always be the last line in every routes file.
module.exports = router;
