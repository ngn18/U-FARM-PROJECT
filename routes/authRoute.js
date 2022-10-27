const express = require("express");
const router = express.Router();
const passport = require('passport');

router.get("/login", (req, res) => {
	res.render("login");
});
// Login route
router.post("/login", passport.authenticate("local", { failureRedirect: "/reglanding" }), (req, res) => {
	res.redirect("/reglanding");
});

// Logout route
router.post("/logout", (req, res) => {
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                res.status(400).send('Unable to logout,Please check your Internet connection');
            } else{
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