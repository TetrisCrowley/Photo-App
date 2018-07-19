const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Index
router.get('/', (req, res, next) => {
  try {
    const foundUsers = await User.find({});
      res.render('index.ejs', {
        users: foundUsers
      });
  } catch (err) {
    console.log(err);
    next(err)
  }
});


// New
router.get('/new', (req, res) => {
  res.render('new.ejs')
});


// Show
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('show.ejs', {
      user: foundUser
    });
  });
});


// Create
router.post('/', async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
      console.log(createdUser, ' this is the createdUser');
      res.redirect('/users');
  } catch (err) {
    res.send(err)
  }
});


// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
      res.redirect('/users')
    } catch (err) {
      res.send(err)
    }
  });

// Edit
router.get('/:id/edit', async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    res.render('edit.ejs', {
      user: foundUser
    })
    res.redirect('/user');
  } catch (err) {
    res.send(err);
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.redirect('/user');
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;