const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');

// Index
router.get('/', (req, res) => {
  Photo.find({}, (err, foundPhotos) => {
    res.render('photos/index.ejs', {
      photos: foundPhotos
    });
  });
});

// New
router.get('/new', (req, res) => {
  User.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs', {
      photo: foundPhoto
    });
  });
});

// Show
router.get('/:id', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs', {
      photo: foundPhoto
    });
  });    
});

// Create
router.post('/', (req, res) => {
  console.log(req.body);
  Photo.create(req.body, (err, createdPhoto) => {
    console.log(createdPhoto, ' this is the createdPhoto');
    res.redirect('/photos');
  });
});

// Delete
router.delete('/:id/edit', (req, res) => {
  Photo.findByIdAndRemove(req.params.id, (err, deletedPhoto) => {
    console.log(deletedPhoto, ' this is deletedPhoto');
    res.redirect('/photos');
  });
});

// Edit
router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/edit.ejs', {
      photo: foundPhoto
    });
  });
});
router.put('/:id', (req, res) => {
 Photo.findByIdAndUpdate(req.body.id, req.body, {new: true}, (err, updatedPhoto) => {
  console.log(updatedPhoto, ' This is the updated photo');
  res.redirect('/photos');
 });   
});

module.exports = router;