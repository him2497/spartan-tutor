const mongoose = require('mongoose');
const {Schema} = mongoose;

const tutorRequestSchema = {
  title: String,
  subject: String,
  _user: {type:Schema.Types.ObjectId, ref:'User'},
  datePosted: Date
}

mongoose.model('tutorRequests', tutorRequestSchema);
