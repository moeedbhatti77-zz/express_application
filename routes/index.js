var express = require('express');
var router = express.Router();
var Faculty = require('../models/FacultyModel');
/* GET home page. */
router.get('/', async (req, res, next)=> {
  console.log('working!!');
  faculties = await Faculty.find();
  res.render('index', { faculties });
});

router.get('/add', (req, res, next)=> {
  res.render('add', { title: 'Assignment' });
});

router.post('/add',async (req, res, next)=> {
  faculty = new Faculty(req.body);
  faculty.phone= req.body['phone[]'] ;
  faculty.address={
    'country': req.body.country,
    'city': req.body.city,
    'street': req.body.street
  };
  console.log(faculty);
  await faculty.save();
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next)=> {
  faculty = await Faculty.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.get('/edit/:id', async (req, res, next)=> {
  faculty = await Faculty.findById(req.params.id);
  res.render('edit',{faculty});
});

router.post('/edit/:id', async (req, res, next)=> {
  faculty = await Faculty.findById(req.params.id);
  faculty.name = req.body.name;
  faculty.age = req.body.age;
  faculty.email = req.body.email;
  faculty.gender = req.body.gender;
  faculty.course_code = req.body.course_code;
  faculty.phone= req.body['phone[]'];
  faculty.address={
    'country': req.body.country,
    'city': req.body.city,
    'street': req.body.street
  };
  console.log(faculty);
  await faculty.save();
  res.redirect('/');
});

router.get('/members', (req, res, next)=> {
  res.render('members', { title: 'Assignment' });
});

module.exports = router;