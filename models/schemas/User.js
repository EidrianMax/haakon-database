const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        validate: {
            validator: (username) => {
                return !username.includes(' ')
            },
            message: 'username must not have white spaces'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate: {
            validator: (password) => {
                return !password.includes(' ')
            },
            message: 'password must not have white spaces'
        }
    },
    favGames: [
        {
            type: ObjectId,
            ref: 'Game'
        }
    ],
    playingGames: [
        {
            type: ObjectId,
            ref: 'Game'
        }
    ],
    playedGames: [
        {
            type: ObjectId,
            ref: 'Game'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})

module.exports = userSchema
