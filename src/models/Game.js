const mongoose = require('mongoose');
const { validateArraySize } = require('../helpers/Validators');

const Game = new mongoose.Schema({
    teams: {
        type: [{ type: mongoose.Schema.ObjectId, ref: 'Team' }],
        validate: [validateArraySize(2, true), '{PATH} error: Must be an array of 2!']
    },
    winner: {
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Team'
    },
    loser: {
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Team'
    },
    week: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: { createdAt: 'created' } });

module.exports = mongoose.model('Game', Game);