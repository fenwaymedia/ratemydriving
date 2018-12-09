const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const LicenseSchema = mongoose.Schema({
  licenseNum: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  }
});

const LicensePlate = module.exports = mongoose.model('LicensePlate', LicenseSchema);

module.exports.getUserById = function(id, callback){
  LicensePlate.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  LicensePlate.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if(err) throw err;
  //     newUser.password = hash;
  //     newUser.save(callback);
  //   });
  // });
  console.log('im being called')
}


// Export the model
// module.exports = mongoose.model('Product', ProductSchema);
