const Joi = require('joi');
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    first_name: String,
    last_name: String,
    created: { type: Date, default: Date.now },
});

UserSchema.methods.joiValidate = (obj) => {
    var schema = {
        username: Joi.string().min(6).max(30).required(),
        password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
        email: Joi.string().email().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        created: Joi.date(),
    }
    return Joi.validate(obj, schema);
}

module.exports = mongoose.model('User', UserSchema);