const Product = require('../models/product.model');
var path = require("path");

//Simple version, without validation or sanitation
// exports.user_details = function (req, res) {
//     // res.send('Greetings from the Test controller!');
//     // res.sendFile(__dirname + '/index.html');
//     res.sendFile(path.join(__dirname+'/index.html'));
// };

exports.test = function (req, res) {
    // res.send('Greetings from the Test controller!');
    // res.sendFile(__dirname + '/index.html');
    // res.sendFile(path.join(__dirname+'/index.html'));
    res.send('hello from user page')
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            licenseNum: req.body.licenseNum,
            state: req.body.state
        }
    );

    product.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        // res.send(product);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
