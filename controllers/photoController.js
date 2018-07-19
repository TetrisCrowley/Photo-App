const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');

// Index
router.get('/', async (req, res, next) => {
  try {
    const foundPhotos = await Photo.find({});
    res.render('index.ejs', {
      photos; foundPhotos
    });
  } catch (err) {
    console.log(err);
    next(err)
  }
});

// New
router.get('/new', (req, res) => {
  // User.findById(req.params.id, (err, foundPhoto) => {
    res.render('show.ejs');
    });
// });

// Show
router.get('/:id', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('show.ejs', {
      photo: foundPhoto
    });
  });    
});

// Create
router.post('/', async (req, res) => {
  try {
    const createdPhoto = await Photo.create(req.body);
      console.log(createdPhoto, ' this is the createdPhoto');
      res.redirect('/photos');
  } catch (err) {
    res.send(err)
  }
});

// Delete
router.delete('/:id/edit', async (req, res) => {
  try {
    const deletedPhoto = await Photo.findByIdAndRemove(req.params.id);
      res.redirect('/photos')
  } catch (err) {
    res.send(err)
  }
});

// Edit
router.get('/:id/edit', async (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/edit.ejs', {
      photo: foundPhoto
    });
  });
});
router.put('/:id', async (req, res) => {
 Photo.findByIdAndUpdate(req.body.id, req.body, {new: true}, (err, updatedPhoto) => {
  console.log(updatedPhoto, ' This is the updated photo');
  res.redirect('/photos');
 });   
});

module.exports = router;