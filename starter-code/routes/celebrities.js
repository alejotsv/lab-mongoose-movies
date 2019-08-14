const express = require('express');
const router = express.Router();

// require Celebrity model to use in CRUD
const Celebrity = require('../models/Celebrity');

// router to display all celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity
    .find()
    .then(celebritiesFromDB => res.render('celebrities', { celebrities: celebritiesFromDB }))
    .catch(err => console.log("Error while getting the celebrities from the DB: ", err));    
});


// in order to use routes anywhere else in this application, we haeve to export them
module.exports = router;