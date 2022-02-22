const mongoose = require('mongoose');
// Setup schema
let accountSchema = mongoose.Schema({
    countryCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    accountStatus:{
        type: String,
        required: true
    },
    status: String
});
// Export Contact model
let Account = module.exports = mongoose.model('account', accountSchema);
module.exports.get = function (callback, limit) {
    Account.find(callback).limit(limit);
}