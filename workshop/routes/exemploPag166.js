var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('exemploPag166', {exibirDiv:true});
});

module.exports = router;