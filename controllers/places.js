const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Tea, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
})

module.exports = router