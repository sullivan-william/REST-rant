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
  if (req.body.pic === '') {
    req.body.pic = '/images/default.jpg'
  }
  if (req.body.city === '') {
    req.body.city = 'Anytown'
  }
  if (req.body.state === '') {
    req.body.state = 'USA'
  }
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == "ValidationError") {
      let message = 'Validation Error: '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`
        message += ` ${err.errors[field].message}`
      }
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
    }
  })
})

// GET route for new place form
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET route for specific place's show page
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
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
  if (req.body.pic === '') {
    req.body.pic = '/images/default.jpg'
  }
  if (req.body.city === '') {
    req.body.city = 'Anytown'
  }
  if (req.body.state === '') {
    req.body.state = 'USA'
  }
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updatedPlace => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
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
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST route for new rants(comments)
router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
          console.log(err)
          res.render('error404')
        })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// DELETE route for rant(comment) deletion
router.delete('/:id/comment/:rantId', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.rantId)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

module.exports = router