const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('user', userSchema);