const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../modules/mysql-init')

router.get('/', (req, res, next) => { // join 창 보여주기

})

router.post('/', (req, res, next) => { // 실제 join 처리

})

module.exports = router