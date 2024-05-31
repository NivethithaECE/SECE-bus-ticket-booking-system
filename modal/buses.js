const mongoose = require('mongoose');

const newBus = mongoose.Schema({
    bus_no:{
        type: Number,
        unique: true
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
    seats: {
        type: Number,
        default: 55
    },
    departure_time: {
        type: String
    },
    arrival_time: {
        type: String
    }
});

module.exports = mongoose.model('newBus', newBus);