const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

// Importing model
const Registering = require('../models/User');
const ProduceUpload = require('../models/Farmerupload');

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
router.get('/aoregister', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agriculturalOfficer') {
    res.render('aoregister');
    } else {
        res.send('Form access is restricted');
    }
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

// Reports routes for the aodashboard
router.get('/aodashboard', connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'agriculturalOfficer') {
        try {
            let totalPoultry = await ProduceUpload.aggregate([
                { $match: { productcategory: 'poultry' } },
                { $group: { _id: '$all',
                totalQuantity: { $sum: '$quantity' },
                totalCost: { $sum: { $multiply: [ '$price', '$quantity' ] } },
                }}
                ])

            let totalHort = await ProduceUpload.aggregate([
                { $match: { productcategory: 'horticultureProduce' } },
                { $group: { _id: '$all',
                totalQuantity: { $sum: '$quantity' },
                totalCost: { $sum: { $multiply: [ '$price', '$quantity' ] } },
                }}
                ])

            let totalDairy = await ProduceUpload.aggregate([
                { $match: { productcategory: 'dairyProducts' } },
                { $group: { _id: '$all',
                totalQuantity: { $sum: '$quantity' },
                totalCost: { $sum: { $multiply: [ '$price', '$quantity' ] } },
                }}
            ])

            console.log('Poultry collections', totalPoultry)
            console.log('Hort collections', totalHort)
            console.log('Dairy collections', totalDairy)

            res.render('aodashboard', {
                title: 'Reports',
                totalP: totalPoultry[0],
                totalH: totalHort[0],
                totalD: totalDairy[0],
            });     
        } catch (error) {
            res.status(400).send('unable to find items in the database');
        }
    }
}) 

// Always MUST always be the last line in every routes file.
module.exports = router;
