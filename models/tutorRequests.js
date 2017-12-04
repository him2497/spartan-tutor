const mongoose = require('mongoose');
const {Schema} = mongoose;

const tutorRequestSchema = {
  subject: String,
  question: String,
  userName: String,
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  datePosted: Date
}

mongoose.model('tutorRequests', tutorRequestSchema);
