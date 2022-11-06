var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function (req, res, next) {
  res.json({
    name: 'Esa',
    profesi: "web developer"
  });
});



module.exports = router;
