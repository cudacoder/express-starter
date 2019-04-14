const config = require('../config');
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(config.mailer.server, config.mailer.defaults);

module.exports = {
  sendMail: async (req, res, next) => {
    try {
      let result = await transporter.sendMail(req.body);
      res.json({ status: true, data: result });
    } catch (err) {
      res.json({ status: false, data: err.message });
    }
  }
}
