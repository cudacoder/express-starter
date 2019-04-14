const router = require('express-promise-router')();
const SiteController = require('../controllers/SiteController');
const { validateRequest, schemas } = require('../helpers/Validators');

router.route('/send-mail')
    .post(validateRequest(schemas.email), SiteController.sendMail);

module.exports = router;