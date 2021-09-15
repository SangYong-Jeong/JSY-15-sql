const express = require('express')
const router = express.Router()
const { error, relPath } = require('../../modules/util')
const { pool } = require('../../modules/mysql-init')
const { NO_EXIST } = require('../../modules/lang-init')

router.get('/', (req, res, next) => {
	req.app.locals.PAGE = 'CREATE'
	// 이렇게 하면 render 시 객체로 보내지 않는다. 대신 다른 라우터에서 같은 변수명 쓸 시 덮어써야하는 문제 존재
	const js = 'book/form'
	const css = 'book/form'
	const book = null
	res.status(200).render('book/form', { js, css, book})
})

router.get('/:idx', async (req, res, next) => {
	req.app.locals.PAGE = 'UPDATE'
	try {
		// 이렇게 하면 render 시 객체로 보내지 않는다. 대신 다른 라우터에서 같은 변수명 쓸 시 덮어써야하는 문제 존재
		const sql = `
		SELECT B.*, 
		F.oriname AS ori, F.savename AS name, F.fieldname AS field, F.idx AS fid, 
		F2.oriname AS ori2, F2.savename AS name2, F2.fieldname AS field2, F2.idx AS fid2 
		FROM books B
		LEFT JOIN files F ON B.idx = F.fidx AND F.fieldname = 'C' AND F.status > '0'
		LEFT JOIN files F2 ON B.idx = F2.fidx AND F2.fieldname = 'U' AND F2.status > '0'
		WHERE B.idx=?`
		const values = [req.params.idx]
		const [[book]] = await pool.execute(sql, values)

		if(book) {
			const js = 'book/form'
			const css = 'book/form'
			book.cover = book.ori ? { ori: book.ori, path: relPath(book.name), idx: book.fid } : null
			book.upfile = book.ori2 ? { ori: book.ori2, idx: book.fid2} : null
			res.status(200).render('book/form', { js, css, book})
		}
		else next(error(400, NO_EXIST))
	}
	catch(err) {
		next(error(500, err))
	}
})

module.exports = router