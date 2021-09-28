const {pool} = require('../../modules/mysql-init')

const createFile = async data => {
	try {
		let {originalname, savename, mimetype, size, fieldname, bookIdx} = data
		let sql = " INSERT INTO files SET oriname=?, savename=?, mimetype=?, size=?, fieldname=?, fidx=? "
		values = [originalname, filename, mimetype, size, fieldname, bookIdx]
		let [rs] = await pool.execute(sql, values)
		return {success: true, idx: rs.insertId}
	}
	catch (err) {
		return {success: false, err}
	}
}

module.exports = {createFile}