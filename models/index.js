const { model } = require('mongoose')
const userSchema = require('./schemas')

module.exports = {
    User: model('User', userSchema)
}
