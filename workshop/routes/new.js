var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Criando Rota' });
});

module.exports = router;
