const path = require('path')
const express = require('express')
const router = express.Router()
const fileRouter = require('./file-router')

router.use('/file', fileRouter)

module.exports = router