const express = require('express');
const app = express();
const port = 7070;
const mongoose = require('mongoose');
const { User } = require('./models/User');
const bodyParser = require('body-parser');
const config = require('./config/key');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('mongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/register', (req, res) => {
  //회원가입할때 필요한 정보를 client에서 받아서 데이터베이스에 넣어주기
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => console.log(`listening on ${port}`));
