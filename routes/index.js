var express = require('express');
var router = express.Router();
var Product = require('../models/FacultyModel');
/* GET home page. */
router.get('/', async (req, res, next)=> {
  products = await Product.find();
  res.render('index', { products });
});

router.get('/add', (req, res, next)=> {
  res.render('add', { title: 'Assignment' });
});
router.get('/members', (req, res, next)=> {
  res.render('members', { title: 'Assignment' });
});
module.exports = router;
