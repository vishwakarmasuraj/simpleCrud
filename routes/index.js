const express = require('express')
const route = express.Router()

route.use('/user',require('./UserRoute'))

module.exports = route