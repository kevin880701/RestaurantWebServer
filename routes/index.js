var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/a', function (req, res) {
  res.render('Main', {
  });
});

module.exports = router;
