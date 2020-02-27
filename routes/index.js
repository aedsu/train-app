const express = require('express');
const router = express.Router();
const trainers = require('../models/trainer.model');
const clients = require('../models/client.model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {trainers: trainers.fetchAll, clients: clients.fetchAll});
});

module.exports = router;
