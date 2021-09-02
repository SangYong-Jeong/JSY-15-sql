const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const formRouter = require('./form-router')
const saveRouter = require('./save-router')

router.use('/save', saveRouter) // POST: 저장
router.use('/form', formRouter) // HTML: 글작성페이지
module.exports = router