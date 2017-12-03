const mongoose = require('mongoose');
const {Schema} = mongoose;
//1 is for students and 2 is for the tutors
const userSchema = new Schema({
  type: {type: String, default: "1"},
  googleId: String,
  name: String,
  credits: {type: Number, default: 0},
});

mongoose.model('users', userSchema);
