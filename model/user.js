const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    accountNumber: {type: String, required: false},
    accountName: {type: String, required: false},
    bankName: {type: String, required: false},
    phoneNumber: {type: String, required: true},
    gender: {type: String, required: false}
});

const User = mongoose.model('User', UserSchema);
module.exports = User