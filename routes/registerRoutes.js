const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
// const Image = require('../models/Farmerupload');

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
var upload = multer({ storage: storage })


// Writing a route(A.O Routes)
router.get('/aoregister',(req, res) => {
    res.render('aoregister');
});

// Post route
router.post('/aoregister', async (req, res) => {
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
                res.redirect('/login');
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

// Always MUST always be the last line in every routes file.
module.exports = router;
