const mongoose = require('mongoose');
const { validateArraySize } = require('../helpers/Validators');

const Bet = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    game: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Game'
    },
    winner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Team'
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: { createdAt: 'created' } });

module.exports = mongoose.model('Bet', Bet);