const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const genRandomNum = Math.random() * Date.now();
    cb(
      null,
      `${file.fieldname}-${genRandomNum}${path.extname(file.originalname)}`
    );
  },
});

const imageMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = imageMimeTypes.includes(file.mimetype);
  // const mimetype = filetypes.test(file.mimetype);
  // console.log('mimetype', mimetype)

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
};

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
