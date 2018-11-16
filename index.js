const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.routes'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:1234asdf@ds037077.mlab.com:37077/nicksproductutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



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
