const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    licenseNum: {type: String, required: true},
    state: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
