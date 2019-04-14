const router = require('express-promise-router')();
const UsersController = require('../controllers/UsersController');

router.route('/create')
    .post(UsersController.create);

module.exports = router;