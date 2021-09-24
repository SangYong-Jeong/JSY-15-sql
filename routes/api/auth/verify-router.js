const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../../modules/mysql-init')
const createError = require('http-errors')
const {findUser} = require('../../../models/auth')

router.get('/verify', async (req, res, next) => { // userid, email 중복 검증
	try {
		const r = await findUser(req.query.key, req.query.value)
		if(r.success) res.redirect('/')
		else if(r.msg) res.send(alert(r.msg))
		else next(createError(r.err))
	}
	catch(err) {
		next(createError(err))
	}
})



module.exports = router