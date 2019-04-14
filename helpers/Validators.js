const Joi = require('joi');

module.exports = {
    validateRequest: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.json(400, result.error);
            }
            if (!req.value) {
                req.value = {};
            }
            req.value['body'] = result.value;
            next();
        }
    },
    validateArraySize: (limit, strict) => {
        return (val) => strict ? val.length == limit : val <= limit
    },
    schemas: {
        email: Joi.object().keys({
            to: Joi.string().email().required(),
            subject: Joi.string().required(),
            text: Joi.string().required()
        }),
        user: Joi.object().keys({
            to: Joi.string().email().required(),
            subject: Joi.string().required(),
            text: Joi.string().required()
        }),
    }
}