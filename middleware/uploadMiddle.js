const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img1/');
  },

  filename(req, file, cb) {
    console.log(file);
    cb(null, `${Date.now() + file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
