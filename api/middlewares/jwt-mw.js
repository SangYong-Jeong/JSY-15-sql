/**
 * 1. 요청이 들어온다. 
 *  @ req.cookies의 존재 여부 확인
 *    - !존재
 *       = DB에서 origin과 apikey의 일치 여부 확인
 *        +  일치
 *          . token을 발행(jwt.sign()) - data: { userid, apikey, origin }
 *          . res.cookie에 token을 저장
 *          . next()
 *        + !일치
 *          . next(createError(401, 'Authorization Fail'))
 *    -  존재
 *       = req.cookies에서 token을 확인하고 `jwt.verify(token, salt): 내용리턴`
 *       = 리턴된 내용에서 전달 받은 origin과 apikey의 일치 여부 확인
 *        +  일치
 *           . next()
 *        + !일치
 *           . next(createError(401, 'Authorization Fail'))
 */

const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { findApiUser } = require('../models/auth')


const createCookie = (domain, apikey, res) => {
  const token = jwt.sign({ domain, apikey }, process.env.JWT_SALT, { expiresIn: Number(process.env.JWT_EXPIRES) })
  res.cookie('token', token, { expires: new Date(Date.now() + Number(process.env.JWT_EXPIRES)) })
}

const isApiUser = async (req, res, next) => {
  const errMsg = 'Authorization Fail'
  try {
    const domain = req.protocol + '://' + req.headers.host
    const apikey = req.query.apikey

    if (req.cookies.token) {
      console.log("쿠키에서 확인")
      const token = jwt.verify(req.cookies.token, process.env.JWT_SALT)
      if (domain === token.domain && apikey === token.apikey) {
        createCookie(domain, apikey, res)
        next()
      }
      else {
        next(createError(401, errMsg))
      }
    }
    else if (domain && apikey) {
      const { success } = await findApiUser(domain, apikey)
      if (success) {
        console.log("처음접근/재발행")
        createCookie(domain, apikey, res)
        next()
      }
      else {
        next(createError(401, errMsg))
      }
    }
    else {
      next(createError(401, errMsg))
    }
  }
  catch (err) {
    next(createError(err))
  }
}

module.exports = { isApiUser }