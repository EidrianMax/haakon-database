const { Schema } = require('mongoose')

const platformSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
})

module.exports = platformSchema
