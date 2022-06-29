const { User } = require('../models/User');

let auth = (req, res, next) => {
  //인증 처리를 하는곳
  //클라이언트 쿠키에 담긴 토큰을 가져온다
  //가져온 토큰을 복호화한 후 유저를 찾는다
  //유저가 있으면 인증 O 없으면 No

  let token = req.cookies.x_auth;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
