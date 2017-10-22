var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/posts', function(req, res, next) {
  res.send(req.body);
});

router.get('/gets', function(req, res, next) {
  res.send(req.query);
});

module.exports = router;
