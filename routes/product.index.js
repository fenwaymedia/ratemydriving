const express = require('express');
const router = express.Router();

router.get('/product', function(req, res, next) {
  res.send('Product page')
})

module.exports = router;
