const mongoose = require('mongoose');

const booking = mongoose.Schema({
    bus_no: {
        type: Number
    },
    seats: {
        type: Number
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    cost: {
        type: String
    }, 
    departure_time: {
        type: String
    },
    arrival_time: {
        type: String
    },
    user_name: {
        type: String
    }
});

module.exports = mongoose.model('book', booking);