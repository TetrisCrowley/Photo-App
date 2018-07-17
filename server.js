const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = 3000;

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// app.use(express.static('public'));

const userController = require('./controllers/userController');
app.use('/users', userController);

const photoController = require('./controllers/photoController');
app.use('/photos', photoController);

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(3000, () => {
  console.log("Express server running")
});