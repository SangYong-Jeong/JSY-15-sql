const validator = require('validator')
const bcrypt = require('bcrypt')
const {pool} = require('../../modules/mysql-init')

/*
findUser()
key = value ORDER BY key [DESC, ASC] LIMIT 0,10
opt.key = 'idx' => key = value
opt.key = {fields:['userid', 'passwd'], op: 'AND'} = WHERE userid = value1 OR[AND] passwd = value2
opt.value = ['booldook', '2'] => WHERE userid = value1 OR[AND] passwd = value2

pool.execute() => INSERT, UPDATE, DELETE [{ affectedRows... },{field info}]
pool.execute() => SELECT [[{id:1...},{id:2...},{id:3...}],{field info}]
*/

const findUser = async (key, value) => {
	let sql
	try {
		sql = ` SELECT * FROM users WHERE ${key} = ? `
		const [r] = await pool.execute(sql, [value])
		return { success: true, user: r[0] }
	}
	catch(err) {
		return { success: false, user: null,  err}
	}
}

const findAllUser = async (order = 'ASC') => {
	let sql
	try {
		sql = ` SELECT * FROM users ORDER BY id ? `
		const [users] = await pool.execute(sql, [order])
		return { success: true, users }
	}
	catch(err) {
		return { success: false, user: null,  err}
	}
}

const isVerify = async (key, value) => {
	const sql = ` SELECT * FROM users WHERE ${key} = ? `
	const [ rs ] = await pool.execute(sql, [value])
	return rs.length ? true : false
}

const loginUser = async (user) => {

}

module.exports = { findUser, findAllUser, isVerify, loginUser }