const express = require("express");
const router = express.Router();
const passport = require('passport');

// Login routes
router.get("/login", (req, res) => {
	res.render("login");
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
    // console.log(req.body)
    req.session.user = req.user;
    console.log('This is the current user', req.session.user);
    if(req.user.role == 'agriculturalOfficer') {
	  res.redirect("/aodashboard");
    } else if (req.user.role == 'farmerOne') {
      res.redirect("/fodashboard");
    } else if (req.user.role == 'urbanFarmer') {
      res.redirect("/ufdashboard");
    } else {
        res.send('Sorry, you are not a registered user') 
    }
});

// Logout route
router.post("/logout", (req, res) => {
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                res.status(400).send('Unable to logout,Please check your Internet connection');
            } else {
                return res.redirect('/login');
            }
        })
    }
	
});

// router.get("/reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == 'AgricOfficer'){
//         try {
//             let totalPoultry = await Produce.aggregate([
//             { $match: { prodcategory: "poultry" } },
//             { $group: { _id: "$prodname", 
//             totalQuantity: { $sum: "$quantity" },
//             totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },             
//             }}
//             ]);

//             let totalHort = await Produce.aggregate([
//                 { $match: { prodcategory: "horticultureproduce" } },
//                 { $group: { _id: "$all", 
//                 totalQuantity: { $sum: "$quantity" },
//                 totalCost: { $sum: { $multiply: [ "$unitprice", "$quantity" ] } },            
//                 }}
//             ]);

module.exports = router;