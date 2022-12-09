const express = require('express');
const router = express.Router();
const upload = require('../controllers/uploadController');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

router.post('/', upload.array('image', 12), (req, res) => {
  console.log('what is res files', req.files);
  const originalName = req.files;
  // console.log('original name', originalName.originalname);

  res.json(req.files);
});

router.post(
  '/unlink',
  asyncHandler(async (req, res) => {
    console.log('req.body backend routes 14', req.body);
    try {
      req.body.forEach((path) => fs.existsSync(path) && fs.unlinkSync(path));
      res.json({ message: 'success' });
    } catch (err) {
      console.error(err);
    }
  })
);

module.exports = router;
