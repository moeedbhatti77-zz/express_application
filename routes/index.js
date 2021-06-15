var express = require('express');
var router = express.Router();
var Product = require('../models/FacultyModel');
/* GET home page. */
router.get('/', async (req, res, next)=> {
  products = await Product.find();
  // console.log(products);
  res.render('index', { products });
});

router.get('/add', (req, res, next)=> {
  res.render('add', { title: 'Assignment' });
});
router.post('/add', (req, res, next)=> {
  console.log(req.body);
  res.render('add', { title: 'Assignment' });
});
router.get('/members', (req, res, next)=> {
  res.render('members', { title: 'Assignment' });
});
module.exports = router;
