const express = require('express');
const router = express.Router();
const a = require('../controllers/assignment.controller')

router.get('/', function(req, res, next) {
  res.render('assignments', {assignments: a.assignment});
});

module.exports = router;
