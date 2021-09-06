const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
	// 이렇게 하면 render 시 객체로 보내지 않는다. 대신 다른 라우터에서 같은 변수명 쓸 시 덮어써야하는 문제 존재
	const title = '도서 등록'
	const description = '등록할 도서를 아래에서 입력하세요'
	const js = 'book/form'
	const css = 'book/form'
	res.status(200).render('book/form', {title, description, js, css})
})

module.exports = router