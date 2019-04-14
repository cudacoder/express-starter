var User = require('../models/User');

module.exports = {
    create: async (req, res, next) => {
        try {
            let match = await User.findOne({ email: req.body.email }).exec();
            if (match) {
                res.json({ status: true, data: 'A user with this email already exists.' });
                return;
            };
            let user = await User.create(req.body);
            res.json({
                status: true,
                data: user.id
            });
        } catch (err) {
            res.json({
                status: false,
                data: err.message
            })
        }
    }
}