var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/login')
.get(function(req, res, next) {
  res.render('login', { title: 'Lab. Interfaces' });
})
.post(function(req, res, next) {
  res.send(req.body);
})
module.exports = router;
