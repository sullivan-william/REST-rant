const router = require('express').Router()
const db = require('../models')


// GET route to display all places
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST route for adding a new place
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// GET route for new place form
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET route for specific place's show page
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then((place) => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// PUT route for handling place edits
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE route for handling place deletion
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// GET route for loading place edit form
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// POST route for new rants(comments)
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// DELETE route for rant(comment) deletion
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router