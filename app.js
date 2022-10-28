//Dependencies
const express = require('express'); // Code used for importing express.
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');
const multer = require('multer');
//Defining express sesssion
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,  
});

//Import the user model
const Registering = require('./models/User');
// const Image = require('./models/Farmerupload');//New line

// Importing route files
const registeringRoutes = require('./routes/registerRoutes');
const foRoutes = require('./routes/fo-routes');
const ufRoutes = require('./routes/uf-routes');
const authRoute = require('./routes/authRoute');
// const bodyParser = require('body-parser');//New line
const { fstat } = require('fs');

//Instantiations
const app = express();

//Set up database connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});


//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views','./views');


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

//Passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
// passport.use(Registering.createStrategy());
// passport.serializeUser(Registering.serializeUser());
// passport.deserializeUser(Registering.deserializeUser());

// To parse URL encoded data
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));//New line
// app.use(bodyParser.json());//New line

//Routes(for using imported routes)
app.use('/', registeringRoutes);
app.use('/', foRoutes);
app.use('/', ufRoutes);
app.use('/', authRoute);

//New line   upload.single('productimage'),
// app.post('/ufarmerupload', (req, res, next) => {
//   var obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     image: {
//       data: fs.readFileSync(path.join(__dirname + '/public/uploads' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   Image.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect('/');
//     }
//   });
// });

// Rendering pug file
app.get('/aoregister', (req, res) => {
  res.render('aoregister');
});
  
app.post("/aoregister", (req, res) => {
  console.log(req.body);
 res.redirect("aoregister");
});

app.get('/login', (req, res) => {
  res.render('login');
});
  
app.post("/login", (req, res) => {
  console.log(req.body);
 res.redirect("login");
});

app.get('/foregister', (req, res) => {
  res.render('foregister');
});
  
app.post("/foregister", (req, res) => {
  console.log(req.body);
 res.redirect("foregister");
});

app.get('/ufregister', (req, res) => {
  res.render('ufregister');
});
  
app.post("/ufregister", (req, res) => {
  console.log(req.body);
 res.redirect("ufregister");
});

  // Should be the last route before the bootstrapping server
  app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });

//Bootstrapping Server, should be the last in the file
app.listen(4000, () => console.log('listening on port 4000'));
