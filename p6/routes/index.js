var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  layout: 'layout/main-layouts',
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res) => {
  layout: 'layout/main-layouts',
  res.render('about');
});



module.exports = router;
