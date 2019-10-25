const express = require('express');
const fs = require('fs');
const path = require('path');
const quotes = require('../quotes');

const router = express.Router();

const ROOT_PATH = path.resolve(__dirname, '..')

router.get('/image', (req, res) => {
  fs.readdir('./public/images/random', (err, files) => {
    const randImage = files[Math.floor(Math.random() * files.length)];
    res.sendFile(`${ROOT_PATH}/public/images/random/${randImage}`);
  });
});

router.get('/:id', function(req, res, next) {
  const quote = quotes.find(q => q.id.toString() === req.params.id);
  if (quote) {
    res.render('quote', { quote })
  } else next()
});

module.exports = router;
