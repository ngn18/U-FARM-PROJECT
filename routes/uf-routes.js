const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const Registering = require('../models/User');
const ProduceUpload = require('../models/Farmerupload');

// Writing a route
router.get('/ufregister', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'farmerOne') {
    res.render('ufregister');
    } else {
        res.send('Form access restricted');
    }
});

// Post route
router.post('/ufregister', async (req, res) => {
    console.log(req.body);
    try {
        const user = new Registering(req.body);
        let uniquenumberExist = await Registering.findOne({uniquenumber:req.body.uniquenumber});
        let ninExist = await Registering.findOne({nin:req.body.nin});
        if(uniquenumberExist){
            return res.status(400).send('This Unique Number is already registered')
        } else if(ninExist){
            return res.status(400).send('This NIN Number is already registered')
        } else {
            await Registering.register(user, req.body.password, (error) =>{
                if (error) {
                    throw error
                } 
                res.redirect('/fodashboard');
            });
        }      
    } catch (error){
        res.status(400).send('Sorry system update');
        console.log(error)
    }
});

// Code to help me change the name being displayed in the pug file(front end) which the user will see from 'items' in the backend to 'urbanfarmers' in the front end. Getting list of all farmerones in the database system.
router.get('/uflist', connectEnsureLogin.ensureLoggedIn(), async (req,res) => {
    try{
        let items = await Registering.find({role:'urbanFarmer'});
        res.render('uflist', {urbanfarmers:items});
    } catch (error) {
        res.status(400).send('Unable to find farmer ones in the database');
        console.log(error);
    }
});

//Farmer One update get and post route
router.get('/urbanfarmer/update/:id', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	try {
		const updateUrbanFarmer = await Registering.findOne({_id:req.params.id})
    res.render('ufupdate', {urbanfarmer:updateUrbanFarmer});
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

router.post('/urbanfarmer/update', async (req, res) => {
	try {
		await Registering.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/uflist');
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});


// Always MUST always be the last line in every routes file.
module.exports = router;
