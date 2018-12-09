const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app  = express();

const product = require('./routes/product.index')
const home = require('./routes/home.routes');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database, { useNewUrlParser: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


// Port Number
const port = 3000;

// CORS Middleware
// app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/home', home);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});

// Set up mongoose connection
// let dev_db_url = 'mongodb://someuser:1234asdf@ds037077.mlab.com:37077/nicksproductutorial';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/products', product);
//



// let dev_db_url = 'mongodb://someuser:1234asdf@ds037077.mlab.com:37077/nicksproductutorial';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;

// const express = require('express')
// const app = express()
// const port = 3000
// var bodyParser = require('body-parser');
//
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// //
// // router.get('/', function(req, res) {
// //     res.json({ message: 'hooray! welcome to our api!' });
// // });
//
// app.post('/', function(req, res) {
//     res.send('this is a post request')
//   });
// app.get('/', (req, res) => res.send('Hi Nick, Welcome'))
//
// app.get('/nick', (req, res) => res.send('Hi Nick, Welcome'))
//
// app.get('/clark', (req, res) => res.send('Clarks what happens when I just save this'))
//
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
