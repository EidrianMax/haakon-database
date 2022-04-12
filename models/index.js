const { model } = require('mongoose')
const {
    userSchema,
    gameSchema,
    genreSchema
} = require('./schemas')

module.exports = {
    User: model('User', userSchema),
    Game: model('Game', gameSchema),
    Genre: model('Genre', genreSchema)
}
