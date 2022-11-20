const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const Registering = require('../models/User');
const ProduceUpload = require('../models/Farmerupload');

// Writing a route
router.get('/foregister', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agriculturalOfficer') {
    res.render('foregister');
    } else {
        res.send('Form access is restricted');
    }
});

// Post route
router.post('/foregister', async (req, res) => {
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
                res.redirect('/aodashboard');
            });
        }      
    } catch (error){
        res.status(400).send('Sorry system update');
        console.log(error)
    }
});

// Code to help me change the name being displayed in the pug file(front end) which the user will see from 'items' in the backend to 'farmerones' in the front end. Getting list of all farmerones in the database system.
router.get('/FarmerOneList', async (req,res) => {
    try{
        let items = await Registering.find({role:'farmerOne'});
        res.render('FOlist', {farmerones:items});
    } catch (error) {
        res.status(400).send('Unable to find farmer ones in the database');
        console.log(error);
    }
});

//Farmer One update get and post route
router.get('/farmerone/update/:id', async (req, res) => {
	try {
		const updateFarmerOne = await Registering.findOne({_id:req.params.id})
    res.render('foupdate', {farmerone:updateFarmerOne});
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

router.post('/farmerone/update', async (req, res) => {
	try {
		await Registering.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/FarmerOneList');
	} catch (error) {
		res.status(400).send('Sorry we were unable to update product');
	}
});

//Getting/Displaying farmer one produce list-------
router.get("/foproducelist", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	try {
		// const sort = {_id:-1}
		let products = await ProduceUpload.find().sort({$natural:-1});
		res.render("foproducelist", { products:products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// Always MUST always be the last line in every routes file.
module.exports = router;
