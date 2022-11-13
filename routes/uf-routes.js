const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing model
const Registering = require('../models/User');
// const Image = require('../models/Farmerupload');

// Writing a route
router.get('/ufregister',(req, res) => {
    res.render('ufregister');
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
                res.redirect('/login');
            });
        }      
    } catch (error){
        res.status(400).send('Sorry system update');
        console.log(error)
    }
});



// Always MUST always be the last line in every routes file.
module.exports = router;
