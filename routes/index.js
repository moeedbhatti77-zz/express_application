var express = require('express');
var router = express.Router();
var Faculty = require('../models/FacultyModel');
/* GET home page. */
router.get('/', async (req, res, next)=> {
  faculties = await Faculty.find();
  // console.log(faculties);
  res.render('index', { faculties });
});

router.get('/add', (req, res, next)=> {
  res.render('add', { title: 'Assignment' });
});

router.post('/add', (req, res, next)=> {
  product = new Faculty(req.body);
  console.log(product);
  product.save();
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next)=> {
  product = await Faculty.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.get('/edit/:id', async (req, res, next)=> {
  faculty = await Faculty.findById(req.params.id);
  res.render('edit',{faculty});
});

router.post('/edit/:id', async (req, res, next)=> {
  product = await Faculty.findById(req.params.id);
  product.title = req.body.title;
  product.price = req.body.price;
  await product.save();
  res.redirect('/');
});

router.get('/members', (req, res, next)=> {
  res.render('members', { title: 'Assignment' });
});

module.exports = router;