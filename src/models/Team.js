const mongoose = require('mongoose');

const Team = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    code: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: { createdAt: 'created' } });

module.exports = mongoose.model('Team', Team);