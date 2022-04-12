const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const gameSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    released: {
        type: Date
    },
    backgroundImage: {
        type: String
    },
    screenshots: [{
        type: String
    }],
    platforms: [
        {
            type: ObjectId,
            ref: 'Platform'
        }
    ],
    genres: [
        {
            type: ObjectId,
            ref: 'Genre'
        }
    ],
    score: {
        type: Number
    },
    website: {
        type: String
    },
    isFav: {
        type: Boolean
    }
})

module.exports = gameSchema
