const KakaoStrategy = require('passport-kakao').Strategy
const {  createSnsUser, findUser, changeUser } = require('../models/auth')

const cb = async (accessToken, refreshToken, profile, done) => {
	try {
		let user = {userid: profile.id, accessToken}
		let userSns = {
			accessToken, 
			refreshToken, 
			provider: 'KA', 
			snsid: profile.id,
			snsname: profile.username || null,
			displayName: profile.displayName || null,
			profileURL: profile._json.properties.profile_image || null,
			email : profile._json.kakao_account.email || null,
		}
		let { success, user: _user } = await findUser('userid', user.userid) 
    const { idx, status } = _user
    console.log(status)
		if(success) {
      if(status === '0') {
        const { success } = await changeUser(idx, { status: '3' })
        const { success: success2 } = await changeUser(idx, { status: '3' }, 'users_sns')
        console.log(success2)
        if(success && success2) user.idx = idx 
        else done('Error') 
      }
		}
		else {
			let {idx: id} = await createSnsUser(user, userSns)
			user.idx = id
		}
		done(null, user)
	}
	catch(err) {
		done(err)
	}
}

// http://127.0.0.1:3000/auth/kakao/cb
// http://localhost:3000/auth/kakao/cb

const kakaoStrategy = new KakaoStrategy({
	clientID: process.env.KAKAO_KEY,
	clientSecret: process.env.KAKAO_SALT,
	callbackURL: '/auth/kakao/cb'
}, cb)

module.exports = passport => passport.use(kakaoStrategy)