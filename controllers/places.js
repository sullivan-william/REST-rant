const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/thai-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Tea, Bakery',
        pic: '/images/cat-cafe.jpg',
        credit: 'Photo by <a href="https://unsplash.com/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Reba Spike</a> on <a href="https://unsplash.com/s/photos/cat-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router