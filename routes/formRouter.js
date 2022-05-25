const router = require('express').Router();
const nodemailer = require('nodemailer');
const upload = require('../middleware/uploadMiddle');
const { User } = require('../db/models');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
//      /form/sendform
router.route('/sendform')
  .post(upload.single('img'), async (req, res) => {
    const {
      name, email, phone, img,
    } = req.body;
    console.log(req.body);
    if (name && phone && email && img) {
      console.log(req.file);
      await User.create({
        name, email, phone, img,
      });
      // const mailOptions = {
      //   from: process.env.EMAIL,
      //   to: email,
      //   subject: 'Магазин часов',
      //   text: 'Мы приняли ваш заказ',
      // };
      // transporter.sendMail(mailOptions);
      // return res.redirect('/');
    }
    res.redirect('/');
  });

module.exports = router;
