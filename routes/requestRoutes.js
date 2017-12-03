const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const TutorRequests = mongoose.model('tutorRequests');

module.exports = app => {
  app.post('/api/request', requireLogin, requireCredits, async (req, res) => {
    const {title, subject} = req.body;

    const request = new TutorRequests({
      title,
      subject,
      _user: req.user.id,
      datePosted: Date.now()
    });
    try {
      await request.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    }catch (err) {
      res.status(422).send(err);
    }

  })

  app.get('/api/userRequests', requireLogin, async (req, res) => {
    TutorRequests.find(function (err, TutorRequests) {
      if (err) return console.error(err);
      console.log(TutorRequests);
      res.send(TutorRequests);
  })
})

};
