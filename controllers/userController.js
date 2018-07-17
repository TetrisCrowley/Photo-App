const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Index
router.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
    res.render('authors/index.ejs', {
      users: foundUsers
    });
  });
});

// New
router.get('/new', (req, res) => {
  res.redner('users/new.ejs')
});

// Show
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/show.ejs', {
      user: foundUser
    });
  });
});

// Create
router.post('/', (req, res) => {
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    console.log(createdUser, ' this is the createdUser');
    res.redirect('/users');
  });
});

// Delete
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    console.log(deletedUser, ' this is deletedUser');
      res.render('users/edit.ejs', {
      });
  });
});

// Edit
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/edit.ejs', {
      user: foundUser
    });
  });
});
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
    console.log(updatedUser, " This is the updated user");
    res.redirect('/users');
  });
});

module.exports = router;