const { Schema } = require('mongoose')

const genreSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
})

module.exports = genreSchema
