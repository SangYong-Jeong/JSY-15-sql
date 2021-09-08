const multer = require('multer')
const moment = require('moment')
const path = require('path')
const fs = require('fs-extra')
const {v4:uuid} = require('uuid')
const {exts} = require('../modules/util')
const allowExt = [...exts.imgExt, ...exts.mediaExt, ...exts.zipExt, ...exts.docExt]
const mega = 1024000


const destination = async (req,res,next)=>{
	try{
		const folder = path.join(__dirname, '../storages', moment().format('YYMMDD'))
	}
	catch(err) {

	}
}





















const storage = multer.diskStorage({destination, filename})
const limits = {fileSize: mega * 5}

module.exports = multer({storage, limits, fileFilter})