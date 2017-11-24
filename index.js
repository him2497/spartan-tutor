const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport.js');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assests like our main.js or main.css
  app.use(express.static('client/build'));
  //This ensures that express will serve up the index.html file if express doesn't recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT);
