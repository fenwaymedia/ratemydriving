const express = require('express');
const router = express.Router();

const LicensePlate = require('../models/product.model');

// Register
router.post('/register', (req, res, next) => {
  let newPlate = new LicensePlate({
    licenseNum: req.body.licenseNum,
    state: req.body.state,
  });

  newPlate.save()

    .then(user => {
      res.json('license plate was added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

  LicensePlate.addUser(newPlate, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
// Require the controllers
// const product_controller = require('../controllers/product.controller');




// a simple test url to check that all of our files are communicating correctly.
// router.get('/test', product_controller.test):
// // router.get('/nick', product_controller.user_details);
// module.exports = router;
//
// router.post('/create', product_controller.product_create);
// router.get('/:id', product_controller.product_details);
// router.put('/:id/update', product_controller.product_update);
// router.delete('/:id/delete', product_controller.product_delete);
