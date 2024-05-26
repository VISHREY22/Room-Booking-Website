const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        require: true
    },
    size: {
        type: String,
        required: true
    },
    bed: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
});

const roommodel = mongoose.model('Room', roomSchema);
module.exports = roommodel;