var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home-page', { title: 'Express' });
});

router.get('/login-signup', function(req, res, next) {
  res.render('login-signup', { title: 'Express' });
});

router.get('/admin-us', function(req, res, next) {
  res.render('admin-usuarios');
});


router.get('/registered', function(req, res, next) {
  res.render('registered-user');
});

router.get('/contactanos', function(req, res, next) {
  res.render('contactanos');
});

router.get('/profesor', function(req, res, next) {
  res.render('profesor');
});



module.exports = router;
