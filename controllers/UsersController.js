const User = require('../models/User');

module.exports = {
    create: async (req, res, next) => {
        try {
            let user = new User(req.body);
            let err = user.joiValidate(req.body);
            if (err) throw err.error;
            let res = await user.save();
            res.json({
                status: true,
                data: user.id
            });
        } catch (e) {
            res.json({
                status: false,
                data: e.message
            })
        }
    }
}