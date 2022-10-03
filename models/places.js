const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: {
        type: String,
        default: '../images/default.jpg'
    },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1000],
        max: [new Date().getFullYear()]
    }
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)