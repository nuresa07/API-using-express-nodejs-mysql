var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(process.env.APP_NAME);
});

router.get('/me', (req, res) => {
  res.send('iki kula ')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router;