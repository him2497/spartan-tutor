const mongoose = require('mongoose');
const {Schema} = mongoose;

const tutorRequestSchema = {
  subject: String,
  question: String,
  userName: String,
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  datePosted: Date,
  accepted: {type: Boolean, default: false},
  dateForMeet: Date,
  location: String
}

mongoose.model('tutorRequests', tutorRequestSchema);
