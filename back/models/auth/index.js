// findUser, verifyData, createUser, updateUser, deleteUser

module.exports = { 
	...require('./create-user'),
	...require('./find-user'),
	...require('./delete-user'),
	...require('./update-user'),
	...require('./update-key'),
}