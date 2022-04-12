const { model } = require('mongoose')
const {
    userSchema,
    gameSchema
} = require('./schemas')

module.exports = {
    User: model('User', userSchema),
    Game: model('Game', gameSchema)
}
