const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { keyBy } = require('lodash')

const salt = 'fjasf98d2(&sASD1'

let pass = '123456'
let pass512 = crypto.createHash('sha512').update(pass + salt).digest('base64')

let pass2 = '123456'
let pass512Re = crypto.createHash('sha512').update(pass2 + salt).digest('base64')

// if(pass512 === pass512Re) console.log('로그인 되었습니다.')
// else console.log('패스워드가 틀렸습니다.')


const genPass = async pass => {	// 암호화
	const a = bcrypt.hash(pass + salt, 5)
	console.log(a)
}

genPass()

const comparePass = async (pass, hash) => {	// 검증
	return await bcrypt.compare(pass + salt, hash)
}

const passVerify = async () => {
	let pass = '123456'
	let hash = await genPass(pass)
	console.log(hash)
	let compare = await comparePass('123456', hash)
	console.log(compare)
}

// passVerify();
