const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const Registering = require('../models/User');
const ProduceUpload = require('../models/Farmerupload');

// Writing a route
router.get('/aodashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agriculturalOfficer') {
    res.render('aodashboard');
} else {
    res.send('Page access is only granted to agricultural officers');
}
});

router.get('/fodashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        req.session.user = req.user;
        if(req.user.role === 'farmerOne') {
            let products = await ProduceUpload.find().sort({$natural:-1});
            res.render("fodashboard", { goods:products });
        } else {
            res.send('Page access is only granted to farmer ones');
        }
    } catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});


router.get('/ufdashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'urbanFarmer') {
    res.render('ufdashboard');
    } else {
        res.send('Page access is only granted to Urban Farmers')
    }
});
  

// Always MUST always be the last line in every routes file.
module.exports = router;
