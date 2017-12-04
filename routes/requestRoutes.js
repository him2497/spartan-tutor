const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const TutorRequests = mongoose.model('tutorRequests');

module.exports = app => {
  app.post('/api/request', requireLogin, requireCredits, async (req, res) => {
    const {subject, question} = req.body;
    const request = new TutorRequests({
      subject,
      question,
      userName: req.user.name,
      _user: req.user.id,
      datePosted: Date.now(),
    });
    try {
      await request.save();
      req.user.credits -= 10;
      const user = await req.user.save();
      res.send(user);
    }catch (err) {
      res.status(422).send(err);
    }

  })

  app.get('/api/studentRequests', requireLogin, async (req, res) => {
    const student = await TutorRequests.find({_user: req.user.id})
    .select({ userName: false });
    res.send(student);
  })

  app.get('/api/tutorRequests', requireLogin, async (req, res) => {
    const tutor = await TutorRequests.find(function (err, TutorRequests) {
      if (err) return console.error(err);
  })
  res.send(tutor);
})

};
