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

router.get('/fodashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'farmerOne') {
    res.render('fodashboard');
    } else {
        res.send('Page access is only granted to farmer ones');
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

// Post route
// router.post("/aodashboard", (req, res) => {
//     console.log(req.body);
//    res.redirect("aodashboard");
//   });

// router.post("/fodashboard", (req, res) => {
//     console.log(req.body);
//    res.redirect("fodashboard");
//   });

// router.post("/ufdashboard", (req, res) => {
//     console.log(req.body);
//    res.redirect("ufdashboard");
//   });
  

// Always MUST always be the last line in every routes file.
module.exports = router;
